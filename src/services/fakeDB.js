const items = [
    {
        _id: '001',
        name: 'The Call of the Wild',
        category: 'ad',
        price: '12.55'
    },
    {
        _id: '002',
        name: 'The Three Musketeers',
        category: 'ad',
        price: '8.55'
    },
    {
        _id: '003',
        name: 'The walking Dead',
        category: 'no',
        price: '10.55'
    },
    {
        _id: '004',
        name: 'Life of Pi',
        category: 'ad',
        price: '11.55'
    }, {
        _id: '005',
        name: 'Watchmen',
        category: 'no',
        price: '9.50'
    },
    {
        _id: '006',
        name: 'The Help',
        category: 'fi',
        price: '12.25'
    },
    {
        _id: '007',
        name: 'Memoirs of Geisha',
        category: 'fi',
        price: '11.65'
    },
    {
        _id: '008',
        name: 'Olive, again',
        category: 'fi',
        price: '12.25'
    },
    {
        _id: '009',
        name: '1984',
        category: 'fi',
        price: '8.45'
    },
    {
        _id: '010',
        name: 'Jane Eyre',
        category: 'no',
        price: '7.65'
    },
    {
        _id: '011',
        name: 'Moby Dick',
        category: 'ad',
        price: '11.35'
    },
    {
        _id: '012',
        name: 'The Testments',
        category: 'fi',
        price: '9.50'
    },
    {
        _id: '013',
        name: 'Catch-22',
        category: 'no',
        price: '9.75'
    },
    {
        _id: '014',
        name: 'Into Thin Air',
        category: 'ad',
        price: '9.45'
    },
    {
        _id: '015',
        name: 'Beloved',
        category: 'no',
        price: '7.65'
    },
    {
        _id: '016',
        name: 'Anna Karenina',
        category: 'no',
        price: '8.65'
    }, {
        _id: '017',
        name: 'Treasure Island',
        category: 'ad',
        price: '6.45'
    },
    {
        _id: '018',
        name: 'Hatchet',
        category: 'ad',
        price: '8.55'
    },
    {
        _id: '019',
        name: 'Robinson Crusoe',
        category: 'ad',
        price: '7.35'
    },
    {
        _id: '020',
        name: 'Into The Wild',
        category: 'ad',
        price: '8.65'
    },
    {
        _id: '021',
        name: 'Born a Crime',
        category: 'ot',
        price: '7.65'
    },
    {
        _id: '022',
        name: 'Becoming',
        category: 'ot',
        price: '8.65'
    }, {
        _id: '023',
        name: 'The Glass Castle',
        category: 'ot',
        price: '6.45'
    },
    {
        _id: '024',
        name: 'The Jemima Code',
        category: 'ot',
        price: '8.55'
    },
    {
        _id: '025',
        name: 'Frida',
        category: 'ot',
        price: '7.35'
    },
    {
        _id: '026',
        name: 'Red at the Bone',
        category: 'ad',
        price: '8.65'
    }
]

const categories = [
    { _id: 'ad', name: 'Adventures' },
    { _id: 'fi', name: 'Fictions' },
    { _id: 'no', name: 'Novels' },
    { _id: 'ot', name: 'Others' }
]

export function getItems() {
    return items;
}