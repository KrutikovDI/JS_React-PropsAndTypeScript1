import React from 'react';
import { Star } from '../Star/Star'
import './stars.module.css'


export const Stars = (count: number):React.ReactNode => {
    let view;
    if (typeof count == 'number' && 0 < count && count < 6) {
        view = true
    } else {view = false}
    return (
        <ul className="card-body-stars">
            <li>
            {view && Array(count).fill('').map((_, i) => <Star key={i}/>)}
            </li>
        </ul>
    )
}