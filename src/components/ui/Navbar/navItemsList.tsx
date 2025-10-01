import AIAssistant from '@/assets/Navbar/AIAssistant.svg';
import AltSeasonIndex from '@/assets/Navbar/AltSeasonIndex.svg';
import BTCDominance from '@/assets/Navbar/BTCDominance.svg';
import Calendar from '@/assets/Navbar/Calendar.svg';
import Cryptocurrency from '@/assets/Navbar/Cryptocurrency.svg';
import CryptocurrnecyTitle from '@/assets/Navbar/CryptocurrnecyTitle.svg';
import FearAndGreed from '@/assets/Navbar/FearAndGreed.svg';
import LiveStreaming from '@/assets/Navbar/LiveStreaming.svg';
import Markets from '@/assets/Navbar/Markets.svg';
import Portfolios from '@/assets/Navbar/Portfolios.svg';
import Research from '@/assets/Navbar/Research.svg';
import SocialNetwork from '@/assets/Navbar/SocialNetwork.svg';
import StockMarket from '@/assets/Navbar/StockMarket.svg';
import StockScreener from '@/assets/Navbar/StockScreener.svg';
import Terminal from '@/assets/Navbar/Terminal.svg';
import MarketPlace from '@/assets/Navbar/MarketPlace.svg';
import DividendCalendar from '@/assets/Navbar/DividendCalendar.svg';
import API from '@/assets/DashboardNavbar/API.svg';
import Billing from '@/assets/DashboardNavbar/Billing.svg';
import Dashboard from '@/assets/DashboardNavbar/Dashboard.svg';
import KYC from '@/assets/DashboardNavbar/KYC.svg';
import Notifications from '@/assets/DashboardNavbar/Notifications.svg';
import Profile from '@/assets/DashboardNavbar/Profile.svg';
import Referrals from '@/assets/DashboardNavbar/Referrals.svg';
import Security from '@/assets/DashboardNavbar/Security.svg';
import { LayoutVariant } from '../AppBackground/AppBackGround';
import { NavItem } from './Navbar';

export const navItemsList: Record<LayoutVariant, NavItem[]> = {
  primal: [
    { id: '0', label: 'Stock Screener', icon: <StockScreener /> },
    { id: '1', label: 'Dividend calendar', icon: <DividendCalendar /> },
    { id: '2', label: 'Events calendar', icon: <Calendar /> },
    { id: '3', label: 'Markets', icon: <Markets /> },
    { id: '4', label: 'Portfolios', icon: <Portfolios /> },
    { id: '5', label: 'Research', icon: <Research /> },
    {
      id: '6',
      label: 'PRODUCTS',
      children: [
        { id: '7', label: 'Stock Market', icon: <StockMarket /> },
        {
          id: '8',
          label: 'Cryptocurrency',
          icon: <CryptocurrnecyTitle />,
          children: [
            { id: '9', label: 'Fear and Greed', icon: <FearAndGreed /> },
            { id: '10', label: 'Altseason Index', icon: <AltSeasonIndex /> },
            { id: '11', label: 'BTC Dominance', icon: <BTCDominance /> },
            { id: '12', label: 'Cryptocurrency', icon: <Cryptocurrency /> },
          ],
        },
        { id: '13', label: 'Social Network', icon: <SocialNetwork /> },
        { id: '14', label: 'Marketplace', icon: <MarketPlace /> },
        { id: '15', label: 'Live Streaming', icon: <LiveStreaming /> },
        { id: '16', label: 'AI Assistant', icon: <AIAssistant /> },
        { id: '17', label: 'Portfolios', icon: <Portfolios /> },
        { id: '18', label: 'Calendar', icon: <Calendar /> },
        { id: '19', label: 'Terminal(DEMO)', icon: <Terminal /> },
      ],
    },
  ],
  secondary: [
   {id: '0',
        label: 'Dashboard',
        icon: <Dashboard />,
         href: '/dashboard',
        children: [
          { id: '1', label: 'Profile', icon: <Profile />, href: '/profile_settings'},
          { id: '2', label: 'Security', icon: <Security />, href: '/security' },
          { id: '3', label: 'Notifications', icon: <Notifications />, href: '/notifications' },
          { id: '4', label: 'Billing', icon: <Billing />, href: '/billing' },
          { id: '5', label: 'Referrals', icon: <Referrals />,  href: '/referrals' },
          { id: '6', label: 'API', icon: <API />,  href: '/api' },
          { id: '7', label: 'KYC', icon: <KYC />, href: '/kyc' },
        ],
    },
  {
    id: '8',
    label: 'PRODUCTS',
    children: [
      {
        id: '9',
        label: 'Stock Market',
        icon: <StockMarket />,
        children: [],
      },
      {
        id: '10',
        label: 'Cryptocurrency',
        icon: <CryptocurrnecyTitle />,
        children: [
          { id: '11', label: 'Fear and Greed', icon: <FearAndGreed /> },
          { id: '12', label: 'Altseason Index', icon: <AltSeasonIndex /> },
          { id: '13', label: 'BTC Dominance', icon: <BTCDominance /> },
          { id: '14', label: 'Cryptocurrency', icon: <Cryptocurrency /> },
        ],
      },
      { id: '15', label: 'Social Network', icon: <SocialNetwork />, children: [] },
      { id: '16', label: 'Marketplace', icon: <MarketPlace />, children: [] },
      { id: '17', label: 'Live Streaming', icon: <LiveStreaming />, children: [] },
      { id: '18', label: 'AI Assistant', icon: <AIAssistant />, children: [] },
      { id: '19', label: 'Portfolios', icon: <Portfolios />, children: [] },
      { id: '20', label: 'Calendar', icon: <Calendar />, children: [] },
      { id: '21', label: 'Terminal(DEMO)', icon: <Terminal />, children: [] },
    ],
  },
  ],
};