import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { describe, expect, it } from 'vitest'

import Input from './Input'

const mockAction = {
  name: 'Email',
  errors: [],
  value: '',
  id: 'email',
  errorId: 'email-error',
  descriptionId: 'email-description',
  allErrors: {}
}

describe('Input', () => {
  it('renders an input and label', () => {
    render(
      <Input
        inputType="email"
        inputRef={createRef()}
        action={mockAction}
      />
    )
    expect(screen.getByLabelText('Email')).toBeInTheDocument()
  })
})
