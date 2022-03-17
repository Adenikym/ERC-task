const Dizz = artifacts.require("Dizz")

contract("Dizz",(accounts)=>{
   

    before(async () =>{
        dizz= await Dizz.deployed()
    })

    it("gives the owner of the token 1000000 tokens", async () =>{
        let balance= await dizz.balanceOf(accounts[0])
      balance=web3.utils.fromWei(balance, 'ether')
      assert.equal(balance, '1000000',"Balance should be 1M for contract creator")
    })

    it("can transfer tokens between accounts", async ()=>{
        let amount= web3.utils.toWei('1000','ether')
        await dizz.transfer(accounts[1],amount, {from: accounts[0]})

        let balance= await dizz.balanceOf(accounts[1])
        balance=web3.utils.fromWei(balance, 'ether')
        assert.equal(balance, '1000',"Balance should be 1k for contract creator")
    })
})