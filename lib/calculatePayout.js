export default function calculatePayout(odds,bet) {
    let payout;
    if (odds === 100) {
        payout = bet * 2
    } else if (odds > 0){
        payout = bet + (Math.floor(((bet * Math.abs(odds))/100) * 100)/100)
    } else if (odds < 0) {
        payout = bet + (Math.floor(((bet * 100)/Math.abs(odds)) * 100)/100)
    }
    return payout.toFixed(2)
}