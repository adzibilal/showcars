import { MouseEventHandler } from 'react'

export interface CustomButtonProps {
    title: string
    containerStyles?: string
    handleClick?: MouseEventHandler<HTMLButtonElement>
    btnType?: 'button' | 'submit'
    textStyles?: string
    rightIcon?: string
    isDisabeled?: boolean
}

export interface CarProps {
    city_mpg: number
    class: string
    combination_mpg: number
    cylinders: number
    displacement: number
    drive: string
    fuel_type: string
    highway_mpg: number
    make: string
    model: string
    transmission: string
    year: number
}

export type CarState = CarProps[] & { message?: string };


export interface FilterProps {
    manufacturer?: string
    year?: number
    model?: string
    limit?: number
    fuel?: string
}

export interface HomeProps {
    searchParams: FilterProps
}

export interface OptionProps {
    title: string
    value: string
}

export interface CustomFilterProps<T> {
    title: string
    options: OptionProps[]
    setFilter: (selected: T) => void
}

export interface ShowMoreProps {
    pageNumber: number
    isNext: boolean
}

export interface SearchBarProps {
    setManuFacturer: (manufacturer: string) => void
    setModel: (model: string) => void
}

export interface SearchManuFacturerProps {
    selected: string
    setSelected: (selected: string) => void
}

export interface ShowMoreProps {
    pageNumber: number;
    isNext: boolean;
    setLimit: (limit: number) => void;
  }
