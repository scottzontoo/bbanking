import React from 'react'
import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import RightSidebar from '@/components/RightSidebar'

const Home = () => {
  const loggedIn = { firstName: "Scott", lastName: "Larry", email: "scott@gmail.com"}
  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
            subtext="Access and manage your account and
             transaction eficiently"
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={5134.23}
          />

          Recnet Transaction
        </header>
      </div>

      <RightSidebar 
        user={loggedIn}
        tansactions={[]}
        banks={[{ currentBalance: 345.33}, { currentBalance: 709.95}]}
      />
    </section>
  )
}

export default Home
