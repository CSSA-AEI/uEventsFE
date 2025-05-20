import React, { useState, useRef, useEffect } from 'react';
import './DropdownMenu.css';

interface DropdownMenuProps<T> {
    options: T[];
    selected: T[];
    onChange: (selected: T[]) => void;
    label?: string;
    maxSelect?: number;
}

function DropdownMenu<T extends string | number>({ options, selected, onChange, label, maxSelect = 3 }: DropdownMenuProps<T>) {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
            setIsOpen(false);
        }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleOption = (option: T) => {
        if (selected.includes(option)) {
        onChange(selected.filter((o) => o !== option));
        } else if (selected.length < maxSelect) {
        onChange([...selected, option]);
        }
    };

    return (
        <div className="dropdown-container" ref={containerRef}>
            <button className="dropdown-toggle" onClick={() => setIsOpen((prev) => !prev)}>
                {selected.length > 0
                ? selected.join(', ')
                : label ?? `Select up to ${maxSelect}...`}{' '}
                <span style={{ marginLeft: '0.5rem' }}>▾</span>
            </button>

            {isOpen && (
                <ul
                    className="dropdown-menu"
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        margin: 0,
                        padding: '0.5rem 0',
                        listStyle: 'none',
                        backgroundColor: '#fff',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                        borderRadius: '4px',
                        zIndex: 1000,
                        minWidth: '200px',
                    }}
                >
                {options.map((option, idx) => {
                    const isSelected = selected.includes(option);
                    const isDisabled = !isSelected && selected.length >= maxSelect;
                    return (
                        <li key={idx}>
                            <button
                                type="button"
                                className="dropdown-item"
                                onClick={() => {
                                    toggleOption(option);
                                    setIsOpen(false);
                                }}
                                disabled={isDisabled}
                                style={{
                                    width: '100%',
                                    padding: '0.5rem 1rem',
                                    textAlign: 'left',
                                    background: 'none',
                                    border: 'none',
                                    cursor: isDisabled ? 'not-allowed' : 'pointer',
                                    opacity: isDisabled ? 0.5 : 1,
                                    fontWeight: isSelected ? 'bold' : 'normal',
                                }}
                            >
                                {isSelected ? '✓ ' : ''}
                                {option}
                            </button>
                        </li>
                    );
                })}
                </ul>
            )}
        </div>
    );
}

export default DropdownMenu;
