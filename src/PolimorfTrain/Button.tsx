import { ComponentProps, ElementType } from 'react';
import style from './Polimorf.module.css'

// ElementType - html тэг (нам в данном случае может понадобиться какойто html тэг -например button или а или еще какой)

type ButtonOwnProps<E extends ElementType = ElementType> = {
    children: string;
    primary?: boolean;
    secondary?: boolean;
    as?: E
}

type ButtonProps<E extends ElementType> = ButtonOwnProps<E> & Omit<ComponentProps<E>, keyof ButtonOwnProps>


const defaultElement = 'button';

export default function Button<E extends ElementType = typeof defaultElement> ({
    children, 
    primary, 
    secondary, 
    as, 
    ...otherProps
}: ButtonProps<E>) {
    const classes = primary ? style.primary : style.secondary
    const TagName = as || defaultElement
    
    return <TagName className={classes} {...otherProps}>{children}</TagName>
}