export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'View',
        to: '/mentor/view',
        icon: 'cil-columns'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Waiting For Approval',
        to: '/admin/view_un_approved',
        icon: 'cil-calendar-check'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Mentor',
        to: '/admin/mentor',
        icon: 'cil-user'
      },
    ]
  }
]