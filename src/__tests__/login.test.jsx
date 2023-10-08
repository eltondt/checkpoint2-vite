import { describe, it, expect, beforeAll, vi } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
//import { LoginForm } from '../components/LoginForm';
import Login from '../routes/login';

beforeAll(() => {
  render(<Login />);
})


describe('Renderiza a página principal corretamente', () => {
  it('deve renderizar a página corretamente', () => {
    // Setup
    const button = screen.getByRole('button');

    // Expectations
    expect(button).not.toBeNull();
  });

  it('deve renderizar um alerta quando o botão for clicado', () => {
    // Setup
    const alertMock = vi.spyOn(window, 'alert').mockImplementation();
    const button = screen.getByRole('button');

    // Actions
    fireEvent.click(button);

    // Expectations
    expect(alertMock).toHaveBeenCalledOnce();
  })
});