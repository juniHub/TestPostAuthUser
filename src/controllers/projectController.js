import mongoose from 'mongoose';
import { ProjectSchema } from '../models/projectModel.js';

const Project = mongoose.model('Project', ProjectSchema);

export const addNewProject = (req, res) => {
    let newProject = new Project(req.body);

    newProject.save((err, project) => {
        if (err) {
            res.send(err);
        }
        res.json(project);
    });
};

export const getProjects = (req,res) => {
    Project.find({}, (err, project) => {
        if (err) {
            res.send(err);
        }
        res.json(project);
    });
};

export const getProjectWithID = (req, res) => {
    Project.findById(req.params.projectId, (err, project) => {
        if (err) {
            res.send(err);
        }
        res.json(project);
    });
};

export const updateProject = (req, res) => {
    Project.findOneAndUpdate({ _id: req.params.projectId}, req.body, { new: true }, (err, project) => {
        if (err) {
            res.send(err);
        }
        res.json(project);
    });
};

export const deleteProject = (req, res) => {
    Project.remove({ _id: req.params.projectId }, (err) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted project'});
    });
};

