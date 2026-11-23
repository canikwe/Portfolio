import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Contact } from '@/components/Contact'
import { contact } from '@/content/site'
import { json, mockFetch } from './helpers'

const fillForm = async () => {
  const user = userEvent.setup()
  await user.type(screen.getByLabelText('Name'), 'Elizabeth Bennet')
  await user.type(screen.getByLabelText('Email'), 'elizabeth@bennet.com')
  await user.type(screen.getByLabelText('Subject'), 'Hello')
  await user.type(screen.getByLabelText('Message'), 'A test message.')
  return user
}

describe('Contact', () => {
  it('has a labelled field for name, email, subject and message', () => {
    render(<Contact />)
    expect(screen.getByLabelText('Name')).toHaveAttribute('name', 'name')
    expect(screen.getByLabelText('Email')).toHaveAttribute('type', 'email')
    expect(screen.getByLabelText('Subject')).toHaveAttribute('name', 'subject')
    expect(screen.getByLabelText('Message').tagName).toBe('TEXTAREA')
  })

  it('still posts to Formspree if JavaScript does not load', () => {
    const { container } = render(<Contact />)
    const form = container.querySelector('form')!
    expect(form).toHaveAttribute('action', contact.formEndpoint)
    expect(form).toHaveAttribute('method', 'POST')
  })

  it('posts the form to Formspree as JSON and thanks the sender', async () => {
    const fetchMock = mockFetch({ [contact.formEndpoint]: () => json({ ok: true }) })
    render(<Contact />)
    const user = await fillForm()

    await user.click(screen.getByRole('button', { name: 'Submit' }))

    expect(await screen.findByText('Thanks!')).toBeInTheDocument()
    expect(fetchMock).toHaveBeenCalledTimes(1)

    const [url, init] = fetchMock.mock.calls[0] as unknown as [string, RequestInit]
    expect(url).toBe(contact.formEndpoint)
    expect(init.method).toBe('POST')
    expect(init.headers).toEqual({ Accept: 'application/json' })
    const body = init.body as FormData
    expect(Object.fromEntries(body.entries())).toEqual({
      name: 'Elizabeth Bennet',
      email: 'elizabeth@bennet.com',
      subject: 'Hello',
      message: 'A test message.',
    })

    expect(screen.getByLabelText('Name')).toHaveValue('')
    expect(screen.queryByRole('button', { name: 'Submit' })).toBeNull()
  })

  it('shows an error and keeps the message when Formspree rejects it', async () => {
    mockFetch({ [contact.formEndpoint]: () => json({}, false, 422) })
    render(<Contact />)
    const user = await fillForm()

    await user.click(screen.getByRole('button', { name: 'Submit' }))

    expect(await screen.findByRole('alert')).toHaveTextContent('Ooops! There was an error.')
    expect(screen.getByLabelText('Message')).toHaveValue('A test message.')
    expect(screen.getByRole('button', { name: 'Submit' })).toBeEnabled()
  })

  it('shows an error when the network request fails', async () => {
    mockFetch({ [contact.formEndpoint]: () => Promise.reject(new Error('offline')) })
    render(<Contact />)
    const user = await fillForm()

    await user.click(screen.getByRole('button', { name: 'Submit' }))

    expect(await screen.findByRole('alert')).toBeInTheDocument()
  })
})
