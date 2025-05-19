import { useEffect, useState } from 'react';
import '../App.css';

const data = [
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch1',
        ca: 'ca1',
        rac: 'vdm',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch1',
        ca: 'ca2',
        rac: 'vdm',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch1',
        ca: 'ca3',
        rac: 'vdm',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch2',
        ca: 'ca1',
        rac: 'vdm',
        kg: 5,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch2',
        ca: 'ca2',
        rac: 'vdm',
        kg: 1,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch2',
        ca: 'ca3',
        rac: 'vdm',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch3',
        ca: 'ca1',
        rac: 'vdm',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch3',
        ca: 'ca2',
        rac: 'vdm',
        kg: 4,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch3',
        ca: 'ca3',
        rac: 'vdm',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch4',
        ca: 'ca1',
        rac: 'vdm',
        kg: 1,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch4',
        ca: 'ca2',
        rac: 'vdm',
        kg: 1.5,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch4',
        ca: 'ca3',
        rac: 'vdm',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch5',
        ca: 'ca1',
        rac: 'vdm',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch5',
        ca: 'ca2',
        rac: 'vdm',
        kg: 3.5,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch5',
        ca: 'ca3',
        rac: 'vdm',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch6',
        ca: 'ca1',
        rac: 'vdm',
        kg: 2,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch6',
        ca: 'ca2',
        rac: 'vdm',
        kg: 6,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch6',
        ca: 'ca3',
        rac: 'vdm',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch7',
        ca: 'ca1',
        rac: 'vdm',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch7',
        ca: 'ca2',
        rac: 'vdm',
        kg: 4,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch7',
        ca: 'ca3',
        rac: 'vdm',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch8',
        ca: 'ca1',
        rac: 'vdm',
        kg: 13,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch8',
        ca: 'ca2',
        rac: 'vdm',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch8',
        ca: 'ca3',
        rac: 'vdm',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch1',
        ca: 'ca1',
        rac: 'vdl',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch1',
        ca: 'ca2',
        rac: 'vdl',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch1',
        ca: 'ca3',
        rac: 'vdl',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch2',
        ca: 'ca1',
        rac: 'vdl',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch2',
        ca: 'ca2',
        rac: 'vdl',
        kg: 1,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch2',
        ca: 'ca3',
        rac: 'vdl',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch3',
        ca: 'ca1',
        rac: 'vdl',
        kg: 5,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch3',
        ca: 'ca2',
        rac: 'vdl',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch3',
        ca: 'ca3',
        rac: 'vdl',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch4',
        ca: 'ca1',
        rac: 'vdl',
        kg: 0.5,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch4',
        ca: 'ca2',
        rac: 'vdl',
        kg: 2,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch4',
        ca: 'ca3',
        rac: 'vdl',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch5',
        ca: 'ca1',
        rac: 'vdl',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch5',
        ca: 'ca2',
        rac: 'vdl',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch5',
        ca: 'ca3',
        rac: 'vdl',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch6',
        ca: 'ca1',
        rac: 'vdl',
        kg: 3,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch6',
        ca: 'ca2',
        rac: 'vdl',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch6',
        ca: 'ca3',
        rac: 'vdl',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch7',
        ca: 'ca1',
        rac: 'vdl',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch7',
        ca: 'ca2',
        rac: 'vdl',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch7',
        ca: 'ca3',
        rac: 'vdl',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch8',
        ca: 'ca1',
        rac: 'vdl',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch8',
        ca: 'ca2',
        rac: 'vdl',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch8',
        ca: 'ca3',
        rac: 'vdl',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch1',
        ca: 'ca1',
        rac: 'bk',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch1',
        ca: 'ca2',
        rac: 'bk',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch1',
        ca: 'ca3',
        rac: 'bk',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch2',
        ca: 'ca1',
        rac: 'bk',
        kg: 6,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch2',
        ca: 'ca2',
        rac: 'bk',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch2',
        ca: 'ca3',
        rac: 'bk',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch3',
        ca: 'ca1',
        rac: 'bk',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch3',
        ca: 'ca2',
        rac: 'bk',
        kg: 4,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch3',
        ca: 'ca3',
        rac: 'bk',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch4',
        ca: 'ca1',
        rac: 'bk',
        kg: 2,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch4',
        ca: 'ca2',
        rac: 'bk',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch4',
        ca: 'ca3',
        rac: 'bk',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch5',
        ca: 'ca1',
        rac: 'bk',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch5',
        ca: 'ca2',
        rac: 'bk',
        kg: 3,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch5',
        ca: 'ca3',
        rac: 'bk',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch6',
        ca: 'ca1',
        rac: 'bk',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch6',
        ca: 'ca2',
        rac: 'bk',
        kg: 6,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch6',
        ca: 'ca3',
        rac: 'bk',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch7',
        ca: 'ca1',
        rac: 'bk',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch7',
        ca: 'ca2',
        rac: 'bk',
        kg: 2,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch7',
        ca: 'ca3',
        rac: 'bk',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch8',
        ca: 'ca1',
        rac: 'bk',
        kg: 10,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch8',
        ca: 'ca2',
        rac: 'bk',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-01'),
        to: 't3',
        chuyen: 'ch8',
        ca: 'ca3',
        rac: 'bk',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch1',
        ca: 'ca1',
        rac: 'vdm',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch1',
        ca: 'ca2',
        rac: 'vdm',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch1',
        ca: 'ca3',
        rac: 'vdm',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch2',
        ca: 'ca1',
        rac: 'vdm',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch2',
        ca: 'ca2',
        rac: 'vdm',
        kg: 6,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch2',
        ca: 'ca3',
        rac: 'vdm',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch3',
        ca: 'ca1',
        rac: 'vdm',
        kg: 2,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch3',
        ca: 'ca2',
        rac: 'vdm',
        kg: 11,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch3',
        ca: 'ca3',
        rac: 'vdm',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch4',
        ca: 'ca1',
        rac: 'vdm',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch4',
        ca: 'ca2',
        rac: 'vdm',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch4',
        ca: 'ca3',
        rac: 'vdm',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch5',
        ca: 'ca1',
        rac: 'vdm',
        kg: 2,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch5',
        ca: 'ca2',
        rac: 'vdm',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch5',
        ca: 'ca3',
        rac: 'vdm',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch6',
        ca: 'ca1',
        rac: 'vdm',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch6',
        ca: 'ca2',
        rac: 'vdm',
        kg: 6,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch6',
        ca: 'ca3',
        rac: 'vdm',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch7',
        ca: 'ca1',
        rac: 'vdm',
        kg: 8,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch7',
        ca: 'ca2',
        rac: 'vdm',
        kg: 5,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch7',
        ca: 'ca3',
        rac: 'vdm',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch8',
        ca: 'ca1',
        rac: 'vdm',
        kg: 11,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch8',
        ca: 'ca2',
        rac: 'vdm',
        kg: 1,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch8',
        ca: 'ca3',
        rac: 'vdm',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch1',
        ca: 'ca1',
        rac: 'vdl',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch1',
        ca: 'ca2',
        rac: 'vdl',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch1',
        ca: 'ca3',
        rac: 'vdl',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch2',
        ca: 'ca1',
        rac: 'vdl',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch2',
        ca: 'ca2',
        rac: 'vdl',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch2',
        ca: 'ca3',
        rac: 'vdl',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch3',
        ca: 'ca1',
        rac: 'vdl',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch3',
        ca: 'ca2',
        rac: 'vdl',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch3',
        ca: 'ca3',
        rac: 'vdl',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch4',
        ca: 'ca1',
        rac: 'vdl',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch4',
        ca: 'ca2',
        rac: 'vdl',
        kg: 5,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch4',
        ca: 'ca3',
        rac: 'vdl',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch5',
        ca: 'ca2',
        rac: 'vdl',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch5',
        ca: 'ca3',
        rac: 'vdl',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch5',
        ca: 'ca1',
        rac: 'vdl',
        kg: 3,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch6',
        ca: 'ca2',
        rac: 'vdl',
        kg: 4,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch6',
        ca: 'ca1',
        rac: 'vdl',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch6',
        ca: 'ca3',
        rac: 'vdl',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch7',
        ca: 'ca1',
        rac: 'vdl',
        kg: 1,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch7',
        ca: 'ca2',
        rac: 'vdl',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch7',
        ca: 'ca3',
        rac: 'vdl',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch8',
        ca: 'ca1',
        rac: 'vdl',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch8',
        ca: 'ca2',
        rac: 'vdl',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch8',
        ca: 'ca3',
        rac: 'vdl',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch1',
        ca: 'ca1',
        rac: 'bk',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch1',
        ca: 'ca2',
        rac: 'bk',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch1',
        ca: 'ca3',
        rac: 'bk',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch2',
        ca: 'ca1',
        rac: 'bk',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch2',
        ca: 'ca2',
        rac: 'bk',
        kg: 5,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch2',
        ca: 'ca3',
        rac: 'bk',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch3',
        ca: 'ca1',
        rac: 'bk',
        kg: 2,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch3',
        ca: 'ca2',
        rac: 'bk',
        kg: 3,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch3',
        ca: 'ca3',
        rac: 'bk',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch4',
        ca: 'ca1',
        rac: 'bk',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch4',
        ca: 'ca2',
        rac: 'bk',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch4',
        ca: 'ca3',
        rac: 'bk',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch5',
        ca: 'ca1',
        rac: 'bk',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch5',
        ca: 'ca2',
        rac: 'bk',
        kg: 5,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch5',
        ca: 'ca3',
        rac: 'bk',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch6',
        ca: 'ca1',
        rac: 'bk',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch6',
        ca: 'ca2',
        rac: 'bk',
        kg: 4,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch6',
        ca: 'ca3',
        rac: 'bk',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch7',
        ca: 'ca1',
        rac: 'bk',
        kg: 6,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch7',
        ca: 'ca2',
        rac: 'bk',
        kg: 4,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch7',
        ca: 'ca3',
        rac: 'bk',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch8',
        ca: 'ca1',
        rac: 'bk',
        kg: 6,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch8',
        ca: 'ca2',
        rac: 'bk',
        kg: 0,
    },
    {
        ngay: new Date('2025-03-02'),
        to: 't3',
        chuyen: 'ch8',
        ca: 'ca3',
        rac: 'bk',
        kg: 0,
    },
]

function Statistic () {
    const today = new Date().toISOString().split("T")[0];
    const [date, setDate] = useState(today);

    const [value, setValue] = useState([]);

    const [result, setResult] = useState({});

    useEffect(() => {
        const tmp = data.filter(e => {
            const selectedDate = new Date(date);
            return isSameDay(e.ngay, selectedDate);
        })

        setValue(tmp);
        
        const totalData = tmp.reduce((acc, { ca, rac, kg }) => {
            
            if (!acc[rac]) {
                acc[rac] = {}; // Tạo nhóm cho từng loại rác nếu chưa có
            }
            if (!acc[rac][ca]) {
                acc[rac][ca] = 0; // Tạo nhóm cho từng ca nếu chưa có trong loại rác đó
            }
            acc[rac][ca] += kg; // Cộng dồn kg vào nhóm tương ứng

            return acc;

        }, {});

        setResult(totalData);

        console.log(totalData);
    }, [date]);

    function isSameDay(date1, date2) {
        return (
            date1.getFullYear() === date2.getFullYear() &&
            date1.getMonth() === date2.getMonth() &&
            date1.getDate() === date2.getDate()
        );
    }

    return (
        <div className='wrapper'>

            
            <input 
                type="date" 
                value={date} 
                onChange={(e) => setDate(e.target.value)} 
            />

            <div style={{marginTop: '20px'}}></div>

            <div style={{width: '2430px'}} className='tb-title'>Bảng theo dõi rác thải ngày 01/03/2025</div>
            <div className='tb-1'>
                <div style={{borderRight: '1px dashed #000', borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '60px', height: '75px'}}>BP/Tổ</div>
                <div style={{borderBottom: '1px dashed #000', borderRight: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '75px'}}>Chuyền</div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <div style={{borderBottom: '1px dashed #000', display: 'flex', flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center', height: '25px'}}>Rác thải nguy hại</div>
                    <div className='tb-1-rac'>
                        <div>
                            <div style={{borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '25px'}}>Vải dính mực</div>
                            <div className='tb-1-ca'>
                                <div style={{borderRight: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>C1</div>
                                <div style={{borderRight: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>C2</div>
                                <div style={{borderRight: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>C3</div>
                                <div style={{borderRight: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>D1</div>
                                <div style={{borderRight: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>D2</div>
                                <div style={{borderRight: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>HC</div>
                                <div style={{borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px', backgroundColor: '#e8d3d3'}}>T</div>
                            </div>
                        </div>
                        <div>
                            <div style={{borderBottom: '1px dashed #000', borderLeft: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '25px'}}>Vải dính Lapa</div>
                            <div className='tb-1-ca'>
                                <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>C1</div>
                                <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>C2</div>
                                <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>C3</div>
                                <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>D1</div>
                                <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>D2</div>
                                <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>HC</div>
                                <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px', backgroundColor: '#e8d3d3'}}>T</div>
                            </div>
                        </div>
                        <div>
                            <div style={{borderBottom: '1px dashed #000', borderLeft: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '25px'}}>Băng keo</div>
                            <div className='tb-1-ca'>
                                <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>C1</div>
                                <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>C2</div>
                                <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>C3</div>
                                <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>D1</div>
                                <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>D2</div>
                                <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>HC</div>
                                <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px', backgroundColor: '#e8d3d3'}}>T</div>
                            </div>
                        </div>
                        <div>
                            <div style={{borderBottom: '1px dashed #000', borderLeft: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '25px'}}>Keo chùi bàn</div>
                            <div className='tb-1-ca'>
                                <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>C1</div>
                                <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>C2</div>
                                <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>C3</div>
                                <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>D1</div>
                                <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>D2</div>
                                <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>HC</div>
                                <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px', backgroundColor: '#e8d3d3'}}>T</div>
                            </div>
                        </div>
                        <div>
                            <div style={{borderBottom: '1px dashed #000', borderLeft: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '25px'}}>Mực in</div>
                            <div className='tb-1-ca'>
                                <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>C1</div>
                                <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>C2</div>
                                <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>C3</div>
                                <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>D1</div>
                                <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>D2</div>
                                <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>HC</div>
                                <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px', backgroundColor: '#e8d3d3'}}>T</div>
                            </div>
                        </div>
                        <div>
                            <div style={{borderBottom: '1px dashed #000', borderLeft: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '25px'}}>Lapa</div>
                            <div className='tb-1-ca'>
                                <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>C1</div>
                                <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>C2</div>
                                <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>C3</div>
                                <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>D1</div>
                                <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>D2</div>
                                <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>HC</div>
                                <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px', backgroundColor: '#e8d3d3'}}>T</div>
                            </div>
                        </div>
                        <div>
                            <div style={{borderBottom: '1px dashed #000', borderLeft: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '25px'}}>Chùi khuôn</div>
                            <div className='tb-1-ca'>
                                <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>C1</div>
                                <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>C2</div>
                                <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>C3</div>
                                <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>D1</div>
                                <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>D2</div>
                                <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>HC</div>
                                <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px', backgroundColor: '#e8d3d3'}}>T</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={{borderBottom: '1px dashed #000',borderLeft: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '50px'}}>Rác thải sinh hoạt</div>
                    <div className='tb-1-ca'>
                        <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>C1</div>
                        <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>C2</div>
                        <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>C3</div>
                        <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>D1</div>
                        <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>D2</div>
                        <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px'}}>HC</div>
                        <div style={{borderLeft: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px', backgroundColor: '#e8d3d3'}}>T</div>
                    </div>
                </div>
                <div style={{borderBottom: '1px dashed #000', borderRight: '1px dashed #000', borderLeft: '1px dashed #000', width: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '75px'}}>
                    Tổng
                </div>
            </div>

            <div style={{display: 'flex'}}>
                <div style={{border: '1px dashed #000', borderTop: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: '60px'}}>Tổ 3</div>
                <div>
                    <div style={{borderRight: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px'}}>Ch.1</div>
                    <div style={{borderTop: '1px dashed #000', borderRight: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px'}}>Ch.2</div>
                    <div style={{borderTop: '1px dashed #000', borderRight: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px'}}>Ch.3</div>
                    <div style={{borderTop: '1px dashed #000', borderRight: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px'}}>Ch.4</div>
                    <div style={{borderTop: '1px dashed #000', borderRight: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px'}}>Ch.5</div>
                    <div style={{borderTop: '1px dashed #000', borderRight: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px'}}>Ch.6</div>
                    <div style={{borderTop: '1px dashed #000', borderRight: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px'}}>Ch.7</div>
                    <div style={{borderTop: '1px dashed #000', borderRight: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px'}}>Ch.8</div>
                    <div style={{borderTop: '1px dashed #000', borderRight: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px', backgroundColor: '#e8d3d3'}}>Cộng</div>
                </div>
                <div style={{}}>
                    {
                        [1,2,3,4,5,6,7,8].map((num) => {
                            return (
                                <div style={{display: 'flex', flexDirection: 'row'}}>
                                    <div style={{display: 'flex', flexDirection: 'row', width: '280px'}}>
                                        {
                                            value?.map((e, i) => {
                                                return (
                                                    e.to === 't3' && e.chuyen === (num===1 ? 'ch1' : num===2 ? 'ch2' : num===3 ? 'ch3' : num===4 ? 'ch4' : num===5 ? 'ch5' : num===6 ? 'ch6' : num===7 ? 'ch7' : 'ch8') && e.rac === 'vdm' &&
                                                    <div style={{borderRight: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px', boxSizing: 'border-box'}}>
                                                        {e.kg}
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div style={{display: 'flex', flexDirection: 'row', width: '280px'}}>
                                        {
                                            value?.map((e, i) => {
                                                return (
                                                    e.to === 't3' && e.chuyen === (num===1 ? 'ch1' : num===2 ? 'ch2' : num===3 ? 'ch3' : num===4 ? 'ch4' : num===5 ? 'ch5' : num===6 ? 'ch6' : num===7 ? 'ch7' : 'ch8') && e.rac === 'vdl' &&
                                                    <div style={{borderRight: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px', boxSizing: 'border-box'}}>
                                                        {e.kg}
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                    <div style={{display: 'flex', flexDirection: 'row', width: '280px'}}>
                                        {
                                            value?.map((e, i) => {
                                                return (
                                                    e.to === 't3' && e.chuyen === (num===1 ? 'ch1' : num===2 ? 'ch2' : num===3 ? 'ch3' : num===4 ? 'ch4' : num===5 ? 'ch5' : num===6 ? 'ch6' : num===7 ? 'ch7' : 'ch8') && e.rac === 'bk' &&
                                                    <div style={{borderRight: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px', boxSizing: 'border-box'}}>
                                                        {e.kg}
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div style={{display: 'flex', flexDirection: 'row', backgroundColor: '#e8d3d3'}}>
                        {
                            result?.vdm?.ca1 &&
                            [1,2,3]?.map(num => {
                                return (
                                    <div style={{display: 'flex', flexDirection: 'row', width: '280px'}}>
                                        {
                                            [1,2,3].map(e => {
                                                return <div style={{borderRight: '1px dashed #000', borderBottom: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px', height: '25px', boxSizing: 'border-box'}}>
                                                    {result?.[`${num===1 ? 'vdm' : num===2 ? 'vdl' : 'bk'}`]?.[`${e===1 ? 'ca1' : e===2 ? 'ca2' : 'ca3'}`]}
                                                </div>
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

            
            <div style={{display: 'flex'}}>
                <div style={{border: '1px dashed #000', borderTop: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '60px'}}>Tổ 4A</div>
                <div>
                    <div style={{borderTop: '1px dashed #000', borderRight: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px'}}>Ch.3A-3B</div>
                    <div style={{borderTop: '1px dashed #000', borderRight: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px'}}>Ch.4A-4B</div>
                    <div style={{borderTop: '1px dashed #000', borderRight: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px'}}>Ch.5A-5B</div>
                    <div style={{borderTop: '1px dashed #000', borderRight: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px'}}>Ch.6A-6B</div>
                    <div style={{borderTop: '1px dashed #000', borderRight: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px'}}>Ch.7A-7B</div>
                    <div style={{borderTop: '1px dashed #000', borderRight: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px'}}>Ch.8A-8B</div>
                    <div style={{borderTop: '1px dashed #000', borderRight: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px'}}>Ch.9A-9B</div>
                    <div style={{borderTop: '1px dashed #000', borderRight: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px', backgroundColor: '#e8d3d3'}}>Cộng</div>
                </div>
                <div></div>
            </div>
            
            <div style={{display: 'flex'}}>
                <div style={{border: '1px dashed #000', borderTop: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '60px'}}>Tổ 4B</div>
                <div>
                    <div style={{borderTop: '1px dashed #000', borderRight: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px'}}>Ch.10A</div>
                    <div style={{borderTop: '1px dashed #000', borderRight: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px'}}>Ch.11A</div>
                    <div style={{borderTop: '1px dashed #000', borderRight: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px'}}>Ch.12A</div>
                    <div style={{borderTop: '1px dashed #000', borderRight: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px'}}>Ch.13A</div>
                    <div style={{borderTop: '1px dashed #000', borderRight: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px'}}>Ch.14A</div>
                    <div style={{borderTop: '1px dashed #000', borderRight: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px', backgroundColor: '#e8d3d3'}}>Cộng</div>
                    <div style={{borderTop: '1px dashed #000', borderRight: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px'}}>Ch.10B</div>
                    <div style={{borderTop: '1px dashed #000', borderRight: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px'}}>Ch.11B</div>
                    <div style={{borderTop: '1px dashed #000', borderRight: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px'}}>Ch.12B</div>
                    <div style={{borderTop: '1px dashed #000', borderRight: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px'}}>Ch.13B</div>
                    <div style={{borderTop: '1px dashed #000', borderRight: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px'}}>Ch.14B</div>
                    <div style={{borderTop: '1px dashed #000', borderRight: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px', backgroundColor: '#e8d3d3'}}>Cộng</div>
                </div>
                <div></div>
            </div>
            
            <div style={{display: 'flex'}}>
                <div style={{border: '1px dashed #000', borderTop: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '60px'}}>Robot</div>
                <div>
                    <div style={{borderTop: '1px dashed #000', borderRight: '1px dashed #000',  display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px'}}>Ch.RB1</div>
                    <div style={{borderTop: '1px dashed #000', borderRight: '1px dashed #000',  display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px'}}>Ch.RB2</div>
                    <div style={{borderTop: '1px dashed #000', borderRight: '1px dashed #000',  display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px'}}>Ch.RB3</div>
                    <div style={{borderTop: '1px dashed #000', borderRight: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px', backgroundColor: '#e8d3d3'}}>Cộng</div>
                </div>
                <div></div>
            </div>
            
            <div style={{display: 'flex'}}>
                <div style={{border: '1px dashed #000', borderTop: 'none', borderRight: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '60px'}}>Mẫu</div>
                <div style={{border: '1px dashed #000', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px'}}></div>
                <div></div>
            </div>
            
            <div style={{display: 'flex'}}>
                <div style={{border: '1px dashed #000', borderTop: 'none', borderRight: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '60px', textAlign: 'center'}}>P.màu</div>
                <div style={{border: '1px dashed #000', borderTop: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px'}}></div>
                <div></div>
            </div>
            
            <div style={{display: 'flex'}}>
                <div style={{border: '1px dashed #000', borderTop: 'none', borderRight: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '60px', textAlign: 'center', fontSize: '10px', fontWeight: '600'}}>Chụp khuôn</div>
                <div style={{border: '1px dashed #000', borderTop: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px'}}></div>
                <div></div>
            </div>
            
            <div style={{display: 'flex'}}>
                <div style={{border: '1px dashed #000', borderTop: 'none', borderRight: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '60px', textAlign: 'center'}}>GN-KH</div>
                <div style={{border: '1px dashed #000', borderTop: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px'}}></div>
                <div></div>
            </div>
            
            <div style={{display: 'flex'}}>
                <div style={{border: '1px dashed #000', borderTop: 'none', borderRight: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '60px'}}>Logo</div>
                <div style={{border: '1px dashed #000', borderTop: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px'}}></div>
                <div></div>
            </div>
            
            <div style={{display: 'flex'}}>
                <div style={{border: '1px dashed #000', borderTop: 'none', borderRight: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '60px', textAlign: 'center'}}>C.hàng</div>
                <div style={{border: '1px dashed #000', borderTop: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px'}}></div>
                <div></div>
            </div>
            
            <div style={{display: 'flex'}}>
                <div style={{border: '1px dashed #000', borderTop: 'none', borderRight: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '60px', textAlign: 'center', fontSize: '10px', fontWeight: '600'}}>Chùi khuôn</div>
                <div style={{border: '1px dashed #000', borderTop: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px'}}></div>
                <div></div>
            </div>
            
            <div style={{display: 'flex'}}>
                <div style={{border: '1px dashed #000', borderTop: 'none', borderRight: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '60px'}}>PBH</div>
                <div style={{border: '1px dashed #000', borderTop: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px'}}></div>
                <div></div>
            </div>
            
            <div style={{display: 'flex'}}>
                <div style={{border: '1px dashed #000', borderTop: 'none', borderRight: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '60px'}}>PCL</div>
                <div style={{border: '1px dashed #000', borderTop: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px'}}></div>
                <div></div>
            </div>
            
            <div style={{display: 'flex'}}>
                <div style={{border: '1px dashed #000', borderTop: 'none', borderRight: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '60px'}}>KCS</div>
                <div style={{border: '1px dashed #000', borderTop: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px'}}></div>
                <div></div>
            </div>
            
            <div style={{display: 'flex'}}>
                <div style={{border: '1px dashed #000', borderTop: 'none', borderRight: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '60px'}}>PĐH</div>
                <div style={{border: '1px dashed #000', borderTop: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px'}}></div>
                <div></div>
            </div>
            
            <div style={{display: 'flex'}}>
                <div style={{border: '1px dashed #000', borderTop: 'none', borderRight: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '60px'}}>T4</div>
                <div style={{border: '1px dashed #000', borderTop: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px'}}></div>
                <div></div>
            </div>
            
            <div style={{display: 'flex'}}>
                <div style={{border: '1px dashed #000', borderTop: 'none', borderRight: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '60px'}}>BS</div>
                <div style={{border: '1px dashed #000', borderTop: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px'}}></div>
                <div></div>
            </div>
            
            <div style={{display: 'flex'}}>
                <div style={{border: '1px dashed #000', borderTop: 'none', borderRight: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '60px'}}>Ép</div>
                <div style={{border: '1px dashed #000', borderTop: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px'}}></div>
                <div></div>
            </div>
            
            <div style={{display: 'flex'}}>
                <div style={{border: '1px dashed #000', borderTop: 'none', borderRight: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '60px'}}>16 căn</div>
                <div style={{border: '1px dashed #000', borderTop: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '70px', height: '25px'}}></div>
                <div></div>
            </div>
        </div>
    )
}

export default Statistic;