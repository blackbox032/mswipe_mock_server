const login = ({ body }, resp) => {
    const response = {
        0: '0810',
        11: '000049',
        39: '00',
        70: '01',
        120.3: 'x2c5u7al61gtj5zbd26mvn1b9jwr8g23'
    }
    console.log(body)
    resp.send(response)
}

const EMVPurchase = ({ body }, resp) => {
    console.log(body)
    resp.send({
        0: '0210',
        2: '476173******0010',
        3: '000000',
        4: '000000001000',
        7: '0224163334',
        11: '000011',
        12: '20201022174150',
        32: '04201337',
        37: '000000563372',
        38: '000025',
        39: '00',
        41: '00109462',
        42: '090000000000001',
        49: '826'
    })
}

module.exports = {
    login,
    EMVPurchase
}