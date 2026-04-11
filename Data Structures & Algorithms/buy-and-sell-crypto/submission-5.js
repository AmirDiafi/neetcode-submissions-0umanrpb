class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
    //         const profits = []
    // for (let i = 0; i < prices.length; i++) {
    //     for (let j = i + 1; j < prices.length; j++) {
    //         if (prices[j] - prices[i] > 0) {
    //             profits.push(prices[j] - prices[i])
    //         }
    //     }
    // }

    // console.log("profits:", profits)

    // if (profits.length === 0) return 0

    // return Math.max(...profits)
        const daysPricesObj = {}
        for(let i = 0; i<prices.length;i++) {
            const profitPrices = []
            for(let j = i+1; j<prices.length;j++) {
                if(prices[i]<prices[j]) {
                    profitPrices.push(prices[j])
                }
            }
            if(profitPrices.length>0) {
                daysPricesObj[prices[i]] = Math.max(...profitPrices)
            }
            
        }
        console.log("daysPricesObj", daysPricesObj)

        const maxProfitsDays = Object.entries(daysPricesObj)
        console.log("maxProfitsDays", maxProfitsDays)
        const profitValues = maxProfitsDays.map((v)=> {
            return v[1] - v[0]
        })
        console.log("profitValues", profitValues)
        if(maxProfitsDays.length === 0) return 0
        console.log("max:", Math.max(...profitValues))
        return Math.max(...profitValues)
    }
}
