'use client'

import {useState, useEffect} from 'react';
import Indicator from '@/app/lib/components/Indicator/Indicator';

export default function Indicators() { 

    return (
        <section className='flex justify-start gap-4 pb-10 lg:pb-14'>
            <Indicator label='Heures' value={60} />
            <Indicator label='Chansons' value={350}/>
            <Indicator label='Artistes' value={72}/>
        </section>
    )
}