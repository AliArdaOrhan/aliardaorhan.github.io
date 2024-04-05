import { render, screen } from '@testing-library/react';
import TILList from './TILList';

describe('TILList', () => {
    it('renders without errors', () => {
        const mockTils = [
            {
                id: '1',
                title: 'Test Title',
                content: 'Test Content',
                tags: ['Test Tag'],
                timestamp: '01-01-2024 13:00',
            },
            {
                id: '2',
                title: 'Test Title 2',
                content: 'Test Content 2',
                tags: ['Test Tag 2'],
                timestamp: '01-01-2024 14:00',
            }
        ]

        render(<TILList tils={mockTils}/>);
        expect(screen.getAllByTestId('til')).toHaveLength(2);
    });
});