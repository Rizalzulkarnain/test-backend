import { db } from '../../../models';


export default {

    /* Add client api start here................................*/

    async index(req, res, next) {
        const { name, slug } = req.body;
        db.category.findOne({ where: { name: name } })
            .then(data => {
                if (data) {
                    return db.category.update({ slug: slug }, { where: { id: data.id } })
                }
                return db.category.create({ name: name, slug: slug })
            })
            .then(category => {
                res.status(200).json({ 'success': true, msg: "Successfully inserted category" });
            })
            .catch(function (err) {
                next(err)
            });
    },


    async mainList(req, res, next) {
        db.category.findAll()
            .then(category => {
                res.status(200).json({ 'success': true, data: category });
            })
            .catch(function (err) {
                next(err)
            });
    },

}