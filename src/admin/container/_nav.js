export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'View',
        to: '/admin/view',
        icon: 'cil-columns',
        user: 'all'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Waiting For Approval',
        to: '/admin/view_un_approved',
        icon: 'cil-calendar-check',
        user:'admin'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Mentor',
        to: '/admin/mentor',
        icon: 'cil-user',
        user: 'admin'
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Base',
        route: '/base',
        icon: 'cil-puzzle',
        items: [
          {
            name: 'Breadcrumbs',
            to: '/base/breadcrumbs'
          },
          {
            name: 'Cards',
            to: '/base/cards'
          },
        ]
      }
    ]
  }
]