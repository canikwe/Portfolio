import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Joke } from '@/components/Joke'
import { JOKE_URL, json, mockFetch } from './helpers'

describe('Joke', () => {
  it('loads a joke from icanhazdadjoke as JSON', async () => {
    const fetchMock = mockFetch({ [JOKE_URL]: () => json({ joke: 'First joke.' }) })
    render(<Joke background="payphones" />)

    expect(await screen.findByText('First joke.')).toBeInTheDocument()
    expect(fetchMock).toHaveBeenCalledWith(JOKE_URL, { headers: { Accept: 'application/json' } })
  })

  it('loads another joke when the refresh button is pressed', async () => {
    const jokes = ['First joke.', 'Second joke.']
    const fetchMock = mockFetch({ [JOKE_URL]: () => json({ joke: jokes.shift() }) })
    render(<Joke background="payphones" />)
    await screen.findByText('First joke.')

    await userEvent.click(screen.getByRole('button', { name: 'Another joke' }))

    expect(await screen.findByText('Second joke.')).toBeInTheDocument()
    expect(fetchMock).toHaveBeenCalledTimes(2)
  })

  it('disables the refresh button while a joke is loading', async () => {
    mockFetch({ [JOKE_URL]: () => json({ joke: 'First joke.' }) })
    render(<Joke background="payphones" />)

    expect(screen.getByRole('button', { name: 'Another joke' })).toBeDisabled()
    await screen.findByText('First joke.')
    expect(screen.getByRole('button', { name: 'Another joke' })).toBeEnabled()
  })

  it('stays usable when the joke API fails', async () => {
    mockFetch({ [JOKE_URL]: () => Promise.reject(new Error('offline')) })
    render(<Joke background="payphones" />)

    await waitFor(() => expect(screen.getByRole('button', { name: 'Another joke' })).toBeEnabled())
  })

  it('uses the background it is given', async () => {
    mockFetch({ [JOKE_URL]: () => json({ joke: 'First joke.' }) })
    render(<Joke background="umbrellas" />)
    expect(screen.getByRole('complementary', { name: 'Dad joke' })).toHaveClass('joke--umbrellas')
    await screen.findByText('First joke.')
  })
})
