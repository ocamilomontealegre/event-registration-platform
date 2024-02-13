import { Router } from 'express';
const router = Router();

// Check API state
router.get('/v1/api/health', checkApiHealth);

// Get all events
router.get('/v1/api/events');

// Get a specific event by ID
router.get('/v1/api/events/:eventId');

// Register for an event
router.post('/v1/api/events/:eventId/register');