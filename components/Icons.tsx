type IconProps = { size?: number; className?: string }

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

export const GitHubIcon = ({ size = 22, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={1.8} className={className} {...stroke}>
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  </svg>
)

export const LinkedInIcon = ({ size = 22, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={1.8} className={className} {...stroke}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

export const ChevronsDownIcon = ({ size = 32, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={2} className={className} {...stroke}>
    <path d="m7 6 5 5 5-5" />
    <path d="m7 13 5 5 5-5" />
  </svg>
)

export const RefreshIcon = ({ size = 20, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={2} className={className} {...stroke}>
    <path d="M21 12a9 9 0 1 1-2.64-6.36L21 8" />
    <path d="M21 3v5h-5" />
  </svg>
)

export const ArrowIcon = ({ size = 16, className }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" strokeWidth={2} className={className} {...stroke}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
)
