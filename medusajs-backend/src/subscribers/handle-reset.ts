import {
    SubscriberArgs,
    type SubscriberConfig,
  } from "@medusajs/medusa"
  import { ContainerRegistrationKeys, Modules } from "@medusajs/framework/utils"
  
  export default async function resetPasswordTokenHandler({
    event: { data: {
      entity_id: email,
      token,
      actor_type,
    } },
    container,
  }: SubscriberArgs<{ entity_id: string, token: string, actor_type: string }>) {
    const logger = container.resolve(ContainerRegistrationKeys.LOGGER)
    logger.info("🔐 reset Password Token Handler")
    const notificationModuleService = container.resolve(
      Modules.NOTIFICATION
    )
  
    const urlPrefix = actor_type === "customer" ? 
      process.env.STORE_FRONT_URL : 
      process.env.ADMIN_URL


    const resetPasswordUrl = `${urlPrefix}/reset-password?token=${token}&email=${email}`

    logger.info(`🔐 reset Password Url: ${resetPasswordUrl}`)
  
    await notificationModuleService.createNotifications({
      to: email,
      channel: "email",
      template: "reset-password-template",
      data: {
        // a URL to a frontend application
        url: resetPasswordUrl,
      },
    })
  }
  
  export const config: SubscriberConfig = {
    event: "auth.password_reset",
  }