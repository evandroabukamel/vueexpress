import { Router } from 'express';
const router = Router()
import faker from 'faker';
import Product from '../../models/Product';
import Category from '../../models/Category';

router.get('/', function (req, res, next) {
  const categories = ["Baby", "Movies", "Shoes", "Books", "Electronics", "Computers", "Kids"]
  for (let i = 0; i < 20; i++) {

  }
})