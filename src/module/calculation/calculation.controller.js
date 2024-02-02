import bankService from "../banks/bank.service.js";
import houseService from "../house/house.service.js";

class Calculation {
    async Calculate(req, res) {
        const { room_id: id, duration } = req.body;
        const room = await houseService.verifyRoom(id);
        const { price_per_meter, meter_count } = room[0];
        const total_price = price_per_meter * meter_count;

        const banks = await bankService.getBankByDuration(duration);

        const sortedBanks = banks
        .filter((bank) => { return bank.rent >= total_price})
        .sort((a, b) => { return a.rent - b.rent });

        const present = (sortedBanks[0].starting_payment.replace("%", "")/100)
        const monthly_payment = (total_price - (total_price * present))/(sortedBanks[0].duration * 12);

        
        res.send({ 
            calculation: {
                house_price: total_price + "$",
                starting_payment: total_price * present + "$",
                monthly_payment: monthly_payment + "$",
                bank_service: sortedBanks[0].service + "$",
                payment_duration: sortedBanks[0].duration + " years",
            },
            room: room[0],
            bank: sortedBanks[0]
        });
    }
}

export default new Calculation();
