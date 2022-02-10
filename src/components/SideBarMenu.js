import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { NavLink } from "react-router-dom";

const menuList = [
	{
		id: 1,
		title: "menu list 1",
		isOpen: false,
	},
	{
		id: 2,
		title: "menu list 2",
		isOpen: false,
	},
	{
		id: 3,
		title: "menu list 3",
		isOpen: false,
	},
];

const menuItems = [
	{
		id: 1,
		title: "Home",
		path: "/",
		menuList: 1,
	},
	{
		id: 2,
		title: "Profile",
		path: "/profile",
		menuList: 2,
	},
	{
		id: 3,
		title: "Tasks",
		path: "/tasks",
		menuList: 3,
	},
	{
		id: 4,
		title: "todo",
		path: "/todo",
		menuList: 3,
	},
];

const SideBarMenu = () => {
	//   const [isOpen, setIsOpen] = useState(false);
	const [lists, setLists] = useState(menuList);

	const handleOpenList = id => {
		lists.find(list => list.id === id && (list.isOpen = !list.isOpen));
		setLists([...lists]);
	};
	return (
		<div className='sidebar__menu'>
			{lists.map(list => (
				<div key={list.id} className='sidebar__menu--list'>
					<div
						className={`sidebar__menu--list-header ${
							list.isOpen ? "open" : ""
						}`}
						onClick={() => handleOpenList(list.id)}>
						<h6>{list.title}</h6>
						<BiChevronDown className='sidebar__menu--list-icon' />
					</div>
					{list.isOpen &&
						menuItems.map(
							item =>
								item.menuList === list.id && (
									<div key={item.id} className='sidebar__menu--list-body'>
										<NavLink
											to={item.path}
											className='sidebar__menu--list-link'>
											{item.title}
										</NavLink>
									</div>
								)
						)}
				</div>
			))}
		</div>
	);
};

export default SideBarMenu;
