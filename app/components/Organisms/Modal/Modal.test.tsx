import { render, screen } from '@testing-library/react'
import { createRef } from 'react'
import { beforeEach, describe, expect, it } from 'vitest'

import SessionContext from '~/providers/sessionProvider'

import Modal from './Modal'

describe('Modal', () => {
  beforeEach(() => {
    // Add modal-portal to the DOM for portal rendering
    const portal = document.createElement('div')
    portal.setAttribute('id', 'modal-portal')
    document.body.appendChild(portal)
  })

  it('renders a modal', () => {
    const triggerRef = createRef<HTMLButtonElement>()
    render(
      <SessionContext.Provider
        value={{ toggleModal: () => { }, triggerId: triggerRef }}
      >
        <Modal>Modal</Modal>
      </SessionContext.Provider>
    )
    expect(screen.getByText('Modal')).toBeInTheDocument()
  })
})
