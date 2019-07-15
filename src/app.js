import './scss/base.scss';

import data from './data';
import { find } from './search';
import { clickOnInputField } from './handlers';

clickOnInputField();
find(data);