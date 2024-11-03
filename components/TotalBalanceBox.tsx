import React from 'react'
import DoughunutChart from './DoughunutChart'
import AnimatedCounter from './AnimatedCounter'

const TotalBalanceBox = ({ accounts = [], totalBanks, 
    totalCurrentBalance}: TotalBalanceBoxProps) => {
  return (
    <section className='total-balance'>
        <div className='total-balance-chart'>
            <DoughunutChart accounts={accounts} />
        </div>

        <div className='flex fles-col gap-6'>
            <h2 className='header-2'>
                Bank Accounts: {totalBanks}

            </h2>
            <div className='flex fles-col gap-2'>
                <p className='total-balance-label'>
                    Total Current Balance
                </p>
                <div className='total-balance-amount flex-center gap-2'>
                    <AnimatedCounter amount= {totalCurrentBalance}/>
                </div>

            </div>
        </div>
    </section>
  )
}

export default TotalBalanceBox
