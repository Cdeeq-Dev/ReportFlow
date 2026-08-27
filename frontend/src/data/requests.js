export const requests = [
  {
    id: 'REQ-1021',
    title: 'Replace motor starter unit',
    type: 'Equipment request',
    department: 'Electrical Department',
    submittedBy: 'Ahmed Musa',
    description: 'The main starter for the compressor line is showing intermittent failure and requires a replacement part.',
    priority: 'High',
    date: '2026-08-23',
    status: 'Pending',
    feedback: [
      { author: 'System Administrator', role: 'Admin', message: 'Please confirm whether this is a critical spare or a planned maintenance item.', date: '2026-08-24 09:15' },
    ],
  },
  {
    id: 'REQ-1028',
    title: 'Clean floor drains',
    type: 'Cleaning request',
    department: 'Water / Cleaners',
    submittedBy: 'Musa Ali',
    description: 'Drain access points require cleaning to reduce backflow buildup before the next shift cycle.',
    priority: 'Medium',
    date: '2026-08-22',
    status: 'Approved',
    feedback: [
      { author: 'System Administrator', role: 'Admin', message: 'Approved for the next maintenance window.', date: '2026-08-23 12:40' },
    ],
  },
  {
    id: 'REQ-1033',
    title: 'Reorder filter media',
    type: 'Material request',
    department: 'Weaving',
    submittedBy: 'Grace Adebayo',
    description: 'The line is low on media for the next two production runs and needs replenishment.',
    priority: 'Critical',
    date: '2026-08-21',
    status: 'Under Review',
    feedback: [
      { author: 'System Administrator', role: 'Admin', message: 'Please share current stock numbers before final approval.', date: '2026-08-21 16:05' },
    ],
  },
]

export default requests
