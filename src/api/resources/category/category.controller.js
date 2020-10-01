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
    // create subcategory

    async subCategoryCreate(req, res, next) {
        const { name, categoryId } = req.body;
        db.SubCategory.findOne({ where: { name: name } })
            .then(data => {
                if (data) {
                    return db.SubCategory.update({ name: name, categoryId: categoryId }, { where: { id: data.id } })
                }
                return db.SubCategory.create({ name: name, categoryId: categoryId })
            })
            .then(data => {
                res.status(200).json({ 'success': true, msg: "Successfully inserted category" });
            })
            .catch(function (err) {
                next(err)
            });
    },
    
    async subCategoryList(req, res, next) {
        db.SubCategory.findAll()
            .then(category => {
                res.status(200).json({ 'success': true, data: category });
            })
            .catch(function (err) {
                next(err)
            });
    },

    //child category id
    async childCategoryCreate(req, res, next) {
        const { name, categoryId, subCatId } = req.body;
        db.ChildCategory.findOne({ where: { name: name } })
            .then(data => {
                if (data) {
                    return db.ChildCategory.update({ name: name, categoryId: categoryId, subCatId: subCatId }, { where: { id: data.id } })
                }
                return db.ChildCategory.create({ name: name, categoryId: categoryId, subCatId: subCatId })
            })
            .then(data => {
                res.status(200).json({ 'success': true, msg: "Successfully inserted childcategory" });
            })
            .catch(function (err) {
                next(err)
            });
    },

    async childCategoryList(req, res, next) {
        db.ChildCategory.findAll()
            .then(category => {
                res.status(200).json({ 'success': true, data: category });
            })
            .catch(function (err) {
                next(err)
            });
    },
}