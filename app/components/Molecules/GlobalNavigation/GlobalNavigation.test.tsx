import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import { describe, expect, it } from 'vitest'

import GlobalNavigation from './GlobalNavigation'

describe('GlobalNavigation', () => {
  it('renders the navigation landmark and logo link', () => {
    render(
      <MemoryRouter>
        <GlobalNavigation />
      </MemoryRouter>
    )
    // Check for the navigation element
    const nav = screen.getByRole('navigation')
    expect(nav).toBeInTheDocument()
    // Check for the logo link (href="/" and non-empty accessible name)
    const logoLink = screen.getByRole('link', { name: /.+/ })
    expect(logoLink).toHaveAttribute('href', '/')
  })
})
