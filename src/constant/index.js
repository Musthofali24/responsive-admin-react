import { GoDatabase } from 'react-icons/go'
import { IoIosLogOut } from 'react-icons/io'
import { FaChartBar } from 'react-icons/fa'
import { HiOutlineBellAlert } from 'react-icons/hi2'

import { MdOutlineRadar } from 'react-icons/md'
import { TbGps, TbArrowsUpDown, TbSettings, TbSpeedboat } from 'react-icons/tb'

const sizeIcon = 18

export const links = [
  {
    href: '/',
    icon: FaChartBar,
    text: 'Dashboard',
    size: sizeIcon
  },
  {
    href: '/tracking',
    icon: MdOutlineRadar,
    text: 'Tracking',
    size: sizeIcon
  },
  {
    href: '/missions',
    icon: TbGps,
    text: 'Missions',
    size: sizeIcon
  },
  {
    href: '/vehicle',
    icon: TbSpeedboat,
    text: 'Vehicle',
    size: sizeIcon
  },
  {
    href: '/data',
    icon: GoDatabase,
    text: 'Data',
    size: sizeIcon
  },
  {
    href: '/logs',
    icon: TbArrowsUpDown,
    text: 'Log',
    size: sizeIcon
  },
  {
    href: '/alerts',
    icon: HiOutlineBellAlert,
    text: 'Alerts',
    size: sizeIcon
  }
]

export const linksbottom = [
  {
    href: '/settings',
    icon: TbSettings,
    text: 'Settings',
    size: sizeIcon
  },
  {
    href: '/auth/logout',
    icon: IoIosLogOut,
    text: 'Logout',
    size: sizeIcon
  }
]
