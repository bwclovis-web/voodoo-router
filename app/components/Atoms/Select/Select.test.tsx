import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'

import Select from './Select'

describe('Select', () => {
  it('renders a select', () => {
    render(
      <Select
        action={{} as any}
        selectId="test-select"
        selectData={[{ id: 1, name: 'Option 1' }]}
        label="Select"
      />
    )
    expect(screen.getByText('Select')).toBeInTheDocument()
    expect(screen.getByRole('combobox')).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Option 1' })).toBeInTheDocument()
  })
})
