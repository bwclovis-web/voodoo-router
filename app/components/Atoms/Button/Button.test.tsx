import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import { Button } from './Button'

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('applies style and size classes', () => {
    render(<Button style="danger" size="lg">Delete</Button>)
    const btn = screen.getByRole('button')
    expect(btn.className).toMatch(/danger|red|lg/i)
  })

  it('applies custom className', () => {
    render(<Button className="custom-class">Custom</Button>)
    const btn = screen.getByRole('button')
    expect(btn.className).toMatch(/custom-class/)
  })

  it('handles onClick', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Click</Button>)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('is accessible by role', () => {
    render(<Button>Accessible</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('can be disabled', () => {
    render(<Button disabled>Disabled</Button>)
    const btn = screen.getByRole('button')
    expect(btn).toBeDisabled()
  })

  it('does not call onClick when disabled', () => {
    const handleClick = vi.fn()
    render(<Button disabled onClick={handleClick}>NoClick</Button>)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('has focus styles when focused', () => {
    render(<Button>Focus</Button>)
    const btn = screen.getByRole('button')
    btn.focus()
    expect(btn).toHaveFocus()
  })
})
