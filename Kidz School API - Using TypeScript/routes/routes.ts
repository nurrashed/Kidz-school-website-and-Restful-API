const expressRouter = require('express');
const crud = require('../controllers/crudController');

function routes() {
    const router = expressRouter.Router();
    const controller = crud();

    const query = (sp:string) => {
        return async function(req:any, res:any){
            req.sql = { sp }
            await controller.crud(req, res);
        }
    }

    // Managing Class Table
    router.route('/Class')
        .get(query('GetClasses'))
        .post(query('AddClass'))

    router.route('/Class/:Id')
        .get(query('GetClass'))
        .put(query('UpdateClass'))
        .delete(query('DeleteClass'))

        
    //Managing Student Table
        router.route('/Student')
            .get(query('GetStudents'))
            .post(query('AddStudent'))

        router.route('/Student/:Id')
            .get(query('GetStudent'))
            .put(query('UpdateStudent'))
            .delete(query('DeleteStudent'))

        //Managing Teacher Table
        router.route('/Teacher')
            .get(query('GetTeachers'))
            .post(query('AddTeacher'))

        router.route('/Teacher/:Id')
            .get(query('GetTeacher'))
            .put(query('UpdateTeacher'))
            .delete(query('DeleteTeacher'))


        //Managing Contact Table
        router.route('/Contact')
            .get(query('GetContacts'))
            .post(query('AddContact'))

        router.route('/Contact/:Id')
            .get(query('GetContact'))
            .put(query('UpdateContact'))
            .delete(query('DeleteContact'))


        //Managing Customer Table
        router.route('/Customer')
            .get(query('GetCustomers'))
            .post(query('AddCustomer'))

        router.route('/Customer/:Id')
            .get(query('GetCustomer'))
            .put(query('UpdateCustomer'))
            .delete(query('DeleteCustomer'))


        //Managing Gender Table
        router.route('/Gender')
            .get(query('GetGenders'))
            .post(query('AddGender'))

        router.route('/Gender/:Id')
            .get(query('GetGender'))
            .put(query('UpdateGender'))
            .delete(query('DeleteGender'))


        //Managing Prefix Table
        router.route('/Prefix')
            .get(query('GetPrefixes'))
            .post(query('AddPrefix'))

        router.route('/Prefix/:Id')
            .get(query('GetPrefix'))
            .put(query('UpdatePrefix'))
            .delete(query('DeletePrefix'))


        //Managing Cart Table
        router.route('/Cart')
            .get(query('GetCart'))
            .post(query('AddCart'))

        router.route('/Cart/:Id')
            .put(query('UpdateCart'))
            .delete(query('DeleteCart'))


        //Managing ClassStudent Table
        router.route('/ClassStudent')
            .get(query('ClassStudents'))
            .post(query('AddClassStudent'))

        router.route('/Gender/:Id')
            .delete(query('DeleteClassStudent'))

            



        /* router.route('/actors')
        .get(query('GetActors'))
        .post(query('AddActor'))

    router.route('/actors/:ActorId')
        .get(query('GetActorById'))
        .put(query('UpdateActor'))
        .delete(query('DeleteActor')) */

    return router;
};

module.exports = routes;