import { Icon } from '#components';
import { h } from 'vue';


interface NavigationItem {
	key?: string; // Allow dynamic keys, not limited to 'sub2'
	icon?: any;
	label?: string;
	title?: string;
	onClick?: () => Promise<void>; // Optional onClick function
	children?: NavigationItem[]; // Optional array of child NavigationItems,
	type?: string;
}



export const navs: NavigationItem[] = [
	{
		key: "home",
		icon: h(Icon, { name: 'material-symbols:space-dashboard-outline-sharp', size: '20' }),
		label: "Home",
		title: "Home",
		async onClick() {
			await navigateTo('/')
		},
	},
	{
		key: "human-resource",
		icon: h(Icon, { name: 'fluent:people-settings-20-regular', size: '20' }),
		label: "Human Resource",
		title: "Human Resource",
		children: [
			{
				key: "employees",
				icon: h(Icon, { name: 'clarity:employee-group-line', size: '20' }),
				label: "Employees",
				title: "Employees",
				async onClick() {
					await navigateTo('/human-resource/employees')
				},
			},
			{
				key: "departments",
				icon: h(Icon, { name: 'fluent-emoji-high-contrast:department-store', size: '20' }),
				label: "Departments",
				title: "Departments",
				async onClick() {
					await navigateTo('/human-resource/departments')
				},
			},
			{
				key: "leaves",
				icon: h(Icon, { name: 'pepicons-pencil:leave-off', size: '20' }),
				label: "Leaves",
				title: "Leaves",
				async onClick() {
					await navigateTo('/human-resource/leaves')
				},
			},
			{
				key: "payroll",
				icon: h(Icon, { name: 'streamline:payment-10', size: '20' }),
				label: "Payroll",
				title: "Payroll",
				async onClick() {
					await navigateTo('/human-resource/payroll')
				},
			},
		]
	},
	{
		key: "vendors",
		icon: h(Icon, { name: 'fluent:people-money-20-regular', size: '20' }),
		label: "Vendors",
		title: "Vendors",
		async onClick() {
			await navigateTo('/vendors')
		},
	},
	{
		key: "customers",
		icon: h(Icon, { name: 'carbon:customer', size: '20' }),
		label: "Customers",
		title: "Customers",
		async onClick() {
			await navigateTo('/customers')
		},
	},
	{
		key: "inventory-management",
		icon: h(Icon, { name: 'carbon:inventory-management', size: '20' }),
		label: "Inventory Management",
		title: "Inventory Management",
		children: [
			{
				key: "products",
				icon: h(Icon, { name: 'eos-icons:products-outlined', size: '20' }),
				label: "Products",
				title: "Products",
				async onClick() {
					await navigateTo('/inventory-management/products')
				},
			},
			{
				key: "media",
				icon: h(Icon, { name: 'material-symbols-light:perm-media-outline', size: '20' }),
				label: "Media",
				title: "Media",
				async onClick() {
					await navigateTo('/inventory-management/media')
				},
			},
			{
				key: "categories",
				icon: h(Icon, { name: 'carbon:categories', size: '20' }),
				label: "Categories",
				title: "Categories",
				async onClick() {
					await navigateTo('/inventory-management/categories')
				},
			},
			{
				key: "sub-categories",
				icon: h(Icon, { name: 'carbon:collapse-categories', size: '20' }),
				label: "Sub Categories",
				title: "Sub Categories",
				async onClick() {
					await navigateTo('/inventory-management/sub-categories')
				},
			},
			{
				key: "brands",
				icon: h(Icon, { name: 'fa6-brands:blackberry', size: '20' }),
				label: "Brands",
				title: "Brands",
				async onClick() {
					await navigateTo('/inventory-management/brands')
				},
			},
			{
				key: "units",
				icon: h(Icon, { name: 'tdesign:measurement-1', size: '20' }),
				label: "Units",
				title: "Units",
				async onClick() {
					await navigateTo('/inventory-management/units')
				},
			},
			{
				key: "stocks",
				icon: h(Icon, { name: 'arcticons:folder-stocks', size: '20' }),
				label: "Stocks",
				title: "Stocks",
				async onClick() {
					await navigateTo('/inventory-management/stocks')
				},
			},
		]
	},
	{
		key: "business-operations-hub",
		icon: h(Icon, { name: 'material-symbols:business-center-outline-sharp', size: '20' }),
		label: "Business Operations Hub",
		title: "Business Operations Hub",
		children: [
			{
				key: "purchase",
				icon: h(Icon, { name: 'carbon:purchase' }),
				label: "Purchase",
				title: "Purchase",
				async onClick() {
					await navigateTo('/business-operations-hub/purchase')
				},

			},
			{
				key: "sales",
				icon: h(Icon, { name: 'mdi:sale-outline', size: '20' }),
				label: "Sales",
				title: "Sales",
				async onClick() {
					await navigateTo('/business-operations-hub/sales')
				},
			},
			{
				key: "expenses",
				icon: h(Icon, { name: 'icon-park-outline:expenses', size: '20' }),
				label: "Expenses",
				title: "Expenses",
				async onClick() {
					await navigateTo('/business-operations-hub/expenses')
				},
			},
		]
	},
	{
		type: "divider",

	},
	{
		type: "group",
		label: "User Management"
	},
	{
		key: "rolesndpermissions",
		icon: h(Icon, { name: 'oui:app-users-roles', size: '20' }),
		label: "Roles & Permissions",
		title: "Roles & Permissions",
		async onClick() {
			await navigateTo('/user-management/roles-and-permissions')
		},
	},

]