export const mockTables = [
  {
    name: 'Users',
    type: 'table',
    rows: 500,
    size: 200,
    columns: [
      { name: 'id', type: 'int', nullable: false },
      { name: 'name', type: 'varchar', nullable: false },
      { name: 'email', type: 'varchar', nullable: true },
    ],
  },
  {
    name: 'Orders',
    type: 'table',
    rows: 1200,
    size: 450,
    columns: [
      { name: 'id', type: 'int', nullable: false },
      { name: 'user_id', type: 'int', nullable: false },
      { name: 'total', type: 'decimal', nullable: false },
    ],
  },
  {
    name: 'Products',
    type: 'table',
    rows: 300,
    size: 180,
    columns: [
      { name: 'id', type: 'int', nullable: false },
      { name: 'name', type: 'varchar', nullable: false },
      { name: 'price', type: 'decimal', nullable: false },
    ],
  },
  {
    name: 'ArchivedOrders',
    type: 'view',
    rows: 0,
    size: 50,
    columns: [
      { name: 'id', type: 'int', nullable: false },
      { name: 'user_id', type: 'int', nullable: false },
      { name: 'total', type: 'decimal', nullable: false },
    ],
  },
];