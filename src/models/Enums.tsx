export enum ErrorCodes {
  // Auth
  invalidToken = "unauthorized-invalid-token",

  // Generic
  badRequest = "bad-request",
  unauthorized = "unauthorized",
  expiredToken = "unauthorized-expired-token",
  forbidden = "forbidden",
  genericServiceError = "generic-service-error",
  entityNotFound = "entity-not-found",
  notFound = "not-found",
  alreadyCreated = "already-created"
}