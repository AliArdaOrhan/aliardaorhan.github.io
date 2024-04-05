import React from 'react';
import { render, screen } from '@testing-library/react';
import TILTag from './Tag';

describe('TILTag', () => {
    it('renders the tag text', () => {
        const tag = 'React';
        render(<TILTag tag={tag} />);
        expect(screen.getByText(tag)).toBeInTheDocument();
    });

    it('renders the tag with the correct class', () => {
        const tag = 'React';
        render(<TILTag tag={tag} />);
        const tagElement = screen.getByText(tag);
        expect(tagElement).toHaveClass('text-sm bg-red-500 text-white px-2 py-1 rounded mr-3');
    });
});
