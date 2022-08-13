import { useState } from "react";
import { BsArrowLeftRight } from "react-icons/bs"
import Display from "./Display";

function Data() {
    const dmvDef = [
        {
            id: 1,
            term: "bear market",
            dMVDefinition: "The economy is jih lunchin and a lot of people are blown.",
            definition: "A bear market is a period of sustained price declines in the stock market. A bear market is generally used to describe a drop of 20% or more. They often indicate a larger economic event, such as a recession."
        },

        {
            id: 2,
            term: "blue chip",
            dMVDefinition: "Companies that have been making money for a brick.",
            definition: "Blue chip is a term used to describe certain stocks issued by established companies. The firms that issue blue chip stocks have usually been around for a long period and have shown they can bounce back from economic downturns. They have more public confidence than many other companies in the market."
        },

        {
            id: 3,
            term: "bull market",
            dMVDefinition: "When the economy is it’s bag. Particularly the stock market.",
            definition: "A bull market is the opposite of a bear market, meaning it’s a prolonged period of economic growth. Bull markets can last for months or years and can be highly profitable for investors. Bull markets are often an indicator of what’s happening in other areas of the economy. For example, they’re often accompanied by strong economic growth and low unemployment."
        },

        {
            id: 4,
            term: "capital Gain(Loss)",
            dMVDefinition: "The difference of what you copped an asset for and what you sold for it.",
            definition: "A capital gain or loss is the difference between your cost basis in an investment (usually the amount you bought it for) and the amount you sold it for. It can help you determine your rate of return on investment. Capital gains are usually subject to taxes, while a capital loss can reduce your tax burden."
        },

        {
            id: 5,
            term: "dividend",
            dMVDefinition: "Deadass when a company pays its profits to its investor",
            definition: "A dividend is a company’s way of passing on a share of its profits to its investors. Dividends are often distributed on a quarterly basis, though not all companies issue dividends. Many companies — especially newer and less established ones — choose to instead reinvest their profits back into the company. Investors who receive dividends can also opt to reinvest rather than pocket them."
        },

        {
            id: 6,
            term: "dollar Cost Averaging",
            dMVDefinition: "Not investing all your money off rip, but putting in little by little at a time.",
            definition: "Dollar-cost averaging is the process of making equal investments at regular intervals over a long period of time. Dollar-cost averaging is the opposite of timing the market since you maintain the same strategy no matter what the market is doing. It’s considered one of the best ways to build wealth over your lifetime."
        },

        {
            id: 7,
            term: "equities",
            dMVDefinition: "Whole time, just a another word for “stocks”.",
            definition: "Equities are another term for stocks. Equity represents the portion of a company that’s owned and funded by its shareholders. When you buy shares in a particular company, you get equity (aka ownership) in that company."
        },

        {
            id: 8,
            term: "stock",
            dMVDefinition: "You cop some ownership of a company.",
            definition: "Stock is a general term that refers to equity investments. In general, a single stock is the same thing as a single share of ownership in a company. However, it’s also used to describe the asset class as a whole. There are several different types of stock, including common stock and preferred stock."
        },

        {
            id: 9,
            term: "asset",
            dMVDefinition: "What bammas buy when they want more money without doing more work.",
            definition: ""
        },

        {
            id: 10,
            term: "liabilities",
            dMVDefinition: "The things you buy to look cool but jah like makes someone else rich. And you deadass broke.",
            definition: ""
        },

        {
            id: 11,
            term: " Annual Percentage Rate(APR)",
            dMVDefinition: " When you try to borrow money from a bank without paying any interest or other fees, the bank’s like “On who?”",
            definition: "APR — or annual percentage rate — is the price you’ll pay to borrow money from a bank or lender. The APR on a loan is the interest rate and other fees combined. In the case of credit cards, your interest rate and APR are usually the same numbers."
        },

        {
            id: 12,
            term: "Annual Percentage Yield(APY)",
            dMVDefinition: "When you leave your money in a savings account and whole time the bank pays you.",
            definition: "Just as your APR is the amount you’ll pay to borrow money, your APY — or annual percentage yield — is the amount you can earn on your money. APY refers to the rate of return in savings accounts and certificates of deposit. APY usually takes into account the compound interest you’ll get on your interest earnings."
        },

        {
            id: 13,
            term: "Emergency Fund",
            dMVDefinition: " Money tucked away for when your life starts poppin off",
            definition: "An emergency fund refers to money you have set aside for emergency expenses. These cash reserves can help to cover the cost of unplanned expenses, such as vehicle repairs. Your emergency fund can also be used to replace your income if you lose your job. Financial experts generally recommend an emergency fund of at least 3-6 months of expenses or more."
        },

        {
            id: 14,
            term: "Index",
            dMVDefinition: "Real live measures the performance of a market or sector",
            definition: "An index is a measure or statistical indicator of an underlying group of assets. Indexes are often used in the stock market to provide benchmarks for market performance, either of the market as a whole or of a particular sector of the market. One of the most popular indexes is the S&P 500, which measures the performance of the 500 largest stocks in the U.S. market."
        },

        {
            id: 15,
            term: "Index Fund",
            dMVDefinition: "Deadass tracks and copies the performance of a market or sector",
            definition: "An index fund is a mutual fund or ETF that tracks the performance of an underlying index, such as the S&P 500, the total stock market, the Russell 2000, and others. Index funds are considered one of the best long-term strategies for building wealth. Index funds seek to match the overall market, not beat it."
        },

        {
            id: 16,
            term: "Inflation",
            dMVDefinition: "When your dollar tries to go smack at the grocery store and it leaves sick ‘cause it can’t buy as much as it did a year ago",
            definition: "Inflation is an increase in the price of goods and services. Inflation is often a measure of how the economy is growing, but also the cost of living. It can reduce your purchasing power since each dollar doesn’t go as far. The opposite of inflation is deflation, which is a decrease in the overall cost of goods and services. While deflation increases your purchasing power, it’s also a sign of economic decline."
        },

        {
            id: 17,
            term: "Interest Rate",
            dMVDefinition: " Jih the money you pay for borrowing money or the money you’re paid for lending it.",
            definition: "An interest rate is the cost of borrowing money. It can work either for you or against you since you’ll pay interest on the money you borrow and earn interest on the money in certain bank accounts. The interest rate you’ll pay on borrowed money is usually based on the type of debt you’re taking on and your creditworthiness."
        },

        {
            id: 18,
            term: "Liquidity",
            dMVDefinition: " Will it be slight to get cash from it or leave you guh",
            definition: "Liquidity describes how easy it is to convert an investment into cash. The money in your bank account is the most liquid since it’s instantly available to you. On the other end of the spectrum, physical assets like real estate are far less liquid, since it could be difficult and time-consuming to sell them and recover your cash."
        },

        {
            id: 19,
            term: " Long Term Investment Strategy",
            dMVDefinition: "Not lookin’ for an easy lick but some tuff growth over time",
            definition: "A long term investment strategy is one that’s focused on sustained growth over many years rather than quick wins and immediate profits. A long-term investment strategy is consistent with a buy-and-hold strategy, where you put your money into certain investments and allow them to grow for many years."
        },

        {
            id: 20,


            term: "Market Price",
            dMVDefinition: "The price of coppin a stock at the current moment",
            definition: "Market price refers to the price at which an asset can be bought and sold on the open market. The market price of any given asset is based on current market factors, including supply and demand. As supply decreases and demand increases, the market price of the asset also increases."
        }
    ]

    const [standardDef, setStandardDef] = useState(
        [
            {
                id: 0,
                term: "Accounting",
                definition: "Explains what a business does with its money"
            },

            {
                id: 1,
                term: "Assets",
                definition: "Benefits you tomorrow by buying it today"
            },

            {
                id: 2,
                term: "Liabilities",
                definition: "You owe! Don’t forget to pay up."
            },

            {
                id: 3,
                term: "Balance Sheet",
                definition: "What the business owns, what the business owes and what the owners get to keep"
            },

            {
                id: 4,
                term: "Income Statement",
                definition: "Seeing all the money you made be chopped by the money you had to spend to make it."
            },

            {
                id: 5,
                term: "Accounting Equation",
                definition: "Just like 2+2= 4, Liabilities + Equity= Assets"
            },

            {
                id: 6,
                term: "Stockholders Equity",
                definition: "How much skin in the game an investor has in a business"
            },

            {
                id: 7,
                term: "Revenue",
                definition: "A world where money is made and expenses are a figment of your imagination."
            },

            {
                id: 8,
                term: "Expense",
                definition: "Money spend to operate a business. Usually things you buy that will be used up in a year or less"
            },

            {
                id: 9,
                term: "Retained Earnings",
                definition: "A company could give its profit to you but instead will hoard it to itself."
            },

            {
                id: 10,
                term: "Accounts Receivable",
                definition: "Service/Work is completed but instead of being paid now, you’re paid later."
            },

            {
                id: 11,
                term: "Accounts Payable",
                definition: "When work gets do for you but you pay those people later instead of now."
            },

            {
                id: 12,
                term: "COGS( Cost of Goods Sold)",
                definition: "The money spent to directly make the products you sold. Think the ingredients needed to make a delicious cake."
            },

            {
                id: 13,
                term: "Debit",
                definition: "A debit INCREASES assets and DECREASES liabilities & equity."
            },

            {
                id: 14,
                term: "Credit",
                definition: "A credit INCREASES liabilities & equity and  DECREASES asset"
            }
        ])

    const words = dmvDef.map((i) => {
        return (
            <li key={i.id}>
                <h1>
                    {i.term}
                </h1>
                <p>
                    {i.definition}
                </p>
                <button className=".BsArrow-btn " onClick={() => convert(i.id)}>
                    <BsArrowLeftRight size={20} />
                </button>
            </li>
        )
    })
    function convert(id) {
        const change = dmvDef.map((i) => {
            id === i.id ?
                { ...i.id, statues: true }
                : { ...i.id, statues: false }
        })
        setDmvDef(change)
    }


    console.log('words:', words);
    return (

        <Display listItems={dmvDef} />

    )
}

export default Data;