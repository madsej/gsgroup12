    const express = require('express');
    const app = express();
    //this is me trying to hard code mutual funds I need to watch more tuts.
    const mutualFunds = [
        {
            id: 1,
            name: 'Vanguard 500 Index Fund',
            ticker: 'VFIAX',
            category: 'S&P 500 Index',
            beta: 1.0, // Example beta value
            expenseRatio: 0.04,
            returnRate: 28.24, // Average annual return rate
        }
    ]
