
import React, { lazy, Suspense } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

const Home = lazy(() => import('../../main/home/Home'))
const TableDemonstration = lazy(() => import('../../main/Table/Table'))
const Scheduling = lazy(() => import('../../main/Scheduling/index'))
const PagingDemonstration = lazy(() => import('../../main/Paging/Paging'))
const CheckboxDemonstration = lazy(() => import('../../main/Checkbox/Checkbox'))
const BlogList = lazy(() => import('../../main/BlogList'))
const SearchBox = lazy(() => import('../../main/SearchBox'))
const UserList = lazy(() => import('../../main/UserList'))
const Calendar = lazy(() => import('../../main/Calendar'))

const pathList = [
	{
		name: 'Home',
		path: '/Home',
		elemrnt: '../../main/home/Home'
	},{
		name: 'table',
		path: '/table',
		elemrnt: '../../main/Table/Table'
	},{
		name: 'Scheduling',
		path: '/Scheduling',
		elemrnt: '../../main/Scheduling/index'
	},{
		name: 'Paging',
		path: '/Paging',
		elemrnt: '../../main/Paging/Paging'
	},{
		name: 'Checkbox',
		path: '/Checkbox',
		elemrnt: '../../main/Checkbox/Checkbox'
	},{
		name: 'BlogList',
		path: '/BlogList',
		elemrnt: '../../main/BlogList'
	},{
		name: 'SearchBox',
		path: '/SearchBox',
		elemrnt: '../../main/SearchBox'
	},{
		name: 'UserList',
		path: '/UserList',
		elemrnt: '../../main/UserList'
	},{
		name: 'Calendar',
		path: '/UserList',
		elemrnt: '../../main/UserList'
	}
]

// const pathFn = path => lazy(() => import(`${path}`))

const Loading = () => <div>loading 。。。</div>

export default function ItemRoute() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
	  
        
		<Route path='/Home' element={<Home />} />
        <Route path='/table' element={<TableDemonstration />} />
        <Route path='/Scheduling' element={<Scheduling />} />
        <Route path='/Paging' element={<PagingDemonstration />} />
        <Route path='/Checkbox' element={<CheckboxDemonstration />} />
        <Route path='/BlogList' element={<BlogList />} />
        <Route path='/SearchBox' element={<SearchBox />} />
        <Route path='/UserList' element={<UserList />} /> 
		<Route path='/Calendar' element={<Calendar />} /> 
		{
			// pathList.map(i => {
			// 	i[i.name] = pathFn(i.element)
			// 	// const Elements = pathFn(i.element)
			// 	console.log(i)
			// 	return <Route path={i.path} key={i.path} element={< />} />
			// })
		}
		

        <Route path='/' element={<Navigate to='/home' />} exact />
        {/* <Route path='*' element={<NoPermission />} /> */}
      </Routes>
    </Suspense>
  )
}
