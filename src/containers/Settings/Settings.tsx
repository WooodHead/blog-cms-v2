import React, { FC, useState } from 'react'
import { Tabs, Tab, Typography } from '@material-ui/core'
import {
  LockOutlined,
  FaceOutlined,
  PermDataSettingOutlined,
} from '@material-ui/icons'
import Security from './Security/Security'
import Global from './Global/Global'
import Profile from './Profile/Profile'
import styles from './settings.module.scss'

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </Typography>
  )
}

const Settings: FC = () => {
  const [value, setValue] = useState(0)
  const handleTabChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue)
  }
  return (
    <section className={styles.setting}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleTabChange}
        aria-label="setting-tabs"
      >
        <Tab
          disableRipple={true}
          label={
            <span className={styles.tabLabel}>
              <FaceOutlined />
              Profile
            </span>
          }
          {...a11yProps(0)}
        />
        <Tab
          disableRipple={true}
          label={
            <span className={styles.tabLabel}>
              <LockOutlined />
              Security
            </span>
          }
          {...a11yProps(1)}
        />
        <Tab
          disableRipple={true}
          label={
            <span className={styles.tabLabel}>
              <PermDataSettingOutlined />
              Global Settings
            </span>
          }
          {...a11yProps(2)}
        />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Profile />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Security />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Global />
      </TabPanel>
    </section>
  )
}

export default Settings