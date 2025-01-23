    const express = require('express');
    const app = express();
    //this is me trying to hard code mutual funds I need to watch more tuts.
    const mutualFunds = [
        {
            id: 1,
            name: 'Vanguard 500 Index Fund',
            ticker: 'VFIAX',
            category: 'S&P 500 Index',
            beta: 1.0,
            expenseRatio: 0.04,
            returnRate: 28.24, // Average annual return rate
        },
        {
            id: 2,
            name: 'Fidelity 500 Index Fund',
            ticker: 'FXAIX',
            category: 'S&P 500 Index',
            beta: 1.0,
            expenseRatio: 0.02,
            returnRate: 28.28, // Average annual return rate
        },
        {
            id: 3,
            name: 'Vanguard Total Stock Market Index Fund;Admiral',
            ticker: 'VTSAX',
            category: 'Multi-Cap Core',
            beta: 1.02,
            expenseRatio: 0.04,
            returnRate: 27.90, // Average annual return rate
        },
        {
            id: 4,
            name: 'Fidelity Government Money Market Fund',
            ticker: 'SPAXX',
            category: 'US Govt Money Mkt',
            beta: 0.01,
            expenseRatio: 0.42,
            returnRate: 4.87, // Average annual return rate
        },
        {
            id: 5,
            name: 'Vanguard Federal Money Market Fund;Investor',
            ticker: 'VMFXX',
            category: 'US Govt Money Mkt',
            beta: 0.01,
            expenseRatio: 0.11,
            returnRate: 5.18, // Average annual return rate
        },
        {
            id: 6,
            name: 'Vanguard Federal Money Market Fund;Investor',
            ticker: 'VMFXX',
            category: 'US Govt Money Mkt',
            beta: 0.01,
            expenseRatio: 0.11,
            returnRate: 5.18, // Average annual return rate
        },
        {
            id: 7,
            name: 'Fidelity Government Cash Reserves',
            ticker: 'FDRXX',
            category: 'US Govt Money Mkt',
            beta: 0.01,
            expenseRatio: 0.38,
            returnRate: 4.90, // Average annual return rate
        },
        {
            id: 8,
            name: 'Goldman Sachs FS Government Fund;Institutional',
            ticker: 'FGTXX',
            category: 'Instl US Govt MMkt',
            beta: 0.01,
            expenseRatio: 0.18,
            returnRate: 5.13, // Average annual return rate
        },
        {
            id: 9,
            name: 'JPMorgan US Government Money Market Fund;Capital',
            ticker: 'OGVXX',
            category: 'Instl US Govt MMkt',
            beta: 0.01,
            expenseRatio: 0.18,
            returnRate: 5.12, // Average annual return rate
        },
        {
            id: 10,
            name: 'Morgan Stanley Inst Liq Government Port;Institutional',
            ticker: 'MVRXX',
            category: 'Instl US Govt MMkt',
            beta: 0.01,
            expenseRatio: 0.18,
            returnRate: 5.14, // Average annual return rate
        },

    ]
