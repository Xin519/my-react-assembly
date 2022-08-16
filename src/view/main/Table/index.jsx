import React from 'react'

export default function Table({columns = [], dataSource = [], rowSelection = {}}) {
    const mapTh = columns.map(i => <th className='ant-table-cell' key={i.key}>{i.title}</th>)

    const mapTd = (item, index) => columns.map(i => <td className='ant-table-cell' key={i.key}>{
        i.render?  i.render(index, item): item[i.dataIndex]
    }</td>)
    const mapTr = () => dataSource.map((i, index) => <tr className='ant-table-row ant-table-row-level-0' key={i.key}>{
        mapTd(i, index)
    }</tr>)
    
  return (
    <div className='ant-table'>
        <div className='ant-table-container'>
            <div className='ant-table-content'>
                <table style={{tableLayout: 'auto'}}>
                    <colgroup></colgroup>
                    <thead className='ant-table-thead'>
                        <tr>
                            {mapTh}
                        </tr>
                    </thead>

                    <tbody className='ant-table-tbody'>
                        {
                            mapTr()
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
