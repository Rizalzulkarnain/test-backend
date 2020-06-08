import { db } from '../../../models';

export default {

    /* Add client api start here................................*/

    async addClient(req, res) {
        console.log( req.body);
            db.user.findOne({ where: { email: req.body.email } })
                .then(find => {
                    if (find) {
                        res.status(200).json({ status:false,'Error':" Client is Already Exits" });
                    }
                    else {
                        return db.user.create({
                            firstName: req.body.firstName,
                            email: req.body.email,
                            lastName: req.body.lastName,
                        })
                    }

                })
                .then(client => {
                    if (client)
                        res.status(200).json({ 'success':"Client has been Created"});
                    else
                        res.status(500).json({ 'success': false });
                })
      
    },
}