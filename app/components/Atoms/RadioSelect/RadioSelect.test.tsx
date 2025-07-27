import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import RadioSelect from './RadioSelect'

const mockData = [
  { id: 'option1', value: '1', label: 'Option 1', name: 'group', defaultChecked: true },
  { id: 'option2', value: '2', label: 'Option 2', name: 'group' }
]

describe('RadioSelect', () => {
  it('renders radio options', () => {
    render(
      <RadioSelect
        data={mockData}
        handleRadioChange={vi.fn()}
      />
    )
    expect(screen.getByLabelText('Option 1')).toBeInTheDocument()
    expect(screen.getByLabelText('Option 2')).toBeInTheDocument()
    expect(screen.getByLabelText('Option 1')).toBeChecked()
    expect(screen.getByLabelText('Option 2')).not.toBeChecked()
  })

  it('calls handleRadioChange when an option is selected', () => {
    const handleRadioChange = vi.fn()
    render(
      <RadioSelect
        data={mockData}
        handleRadioChange={handleRadioChange}
      />
    )
    screen.getByLabelText('Option 2').click()
    expect(handleRadioChange).toHaveBeenCalled()
  })
})
