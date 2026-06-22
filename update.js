const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf8');

// Find the PM section
const pmIdx = content.indexOf("id: 'pm',");
const manualsStart = content.indexOf('manuals: [', pmIdx);

// New manual entry to add
const newEntry = `    {
      title: 'Proceso de Finalización de Contrato',
            summary: 'Este documento describe el protocolo oficial de SAUY Marketing para cerrar contratos con clientes. El proceso inicia con la notificación en Google Chat, seguido de la recopilación de información por el PM, desactivación de campañas (Pauta), entrega de accesos (Contenido y Diseño), actualización de agenda y devolución de celular (Comercial), limpieza del CRM, liberación de landing pages (Web) y finalmente el envío del informe de entrega al cliente. El cierre total lo confirma Gerencia.',
                  link: 'https://drive.google.com/file/d/1AGjBhxcTKMZzWkw7IR6HtZn6yruIr2zh/view?usp=drive_link',
                        steps: [
                                '00 - Activación: Gerencia o PM notifica en Google Chat y activa flujo en Click Up.',
                                        '01 - Recopilación: PM reúne carpetas Drive, Master Metrics y accesos completos del cliente.',
                                                '02 - Área de Pauta: Apagar campañas, gestionar accesos y verificación 2FA.',
                                                        '03 - Contenido/Diseño: Entregar accesos a redes, cerrar sesiones con evidencia.',
                                                                '04 - Comercial: Actualizar agenda y gestionar devolución del celular si aplica.',
                                                                        '05 - CRM: Exportar base de datos, eliminar accesos y WhatsApp del sistema.',
                                                                                '06 - Web: Liberar landing pages al cliente con documentación técnica.',
                                                                                        '07 - Informe Final: PM compila y envía entregables al cliente por correo.',
                                                                                                '08 - Cierre Total: Gerencia verifica todo y publica notificación de cierre.',
                                                                                                      ],
                                                                                                          },`; 

                                                                                                          // Insert after 'manuals: ['
                                                                                                          const insertPoint = manualsStart + 'manuals: ['.length;
                                                                                                          const newContent = content.slice(0, insertPoint) + '\n' + newEntry + '\n' + content.slice(insertPoint);

                                                                                                          fs.writeFileSync('src/App.tsx', newContent, 'utf8');
                                                                                                          console.log('Done! Entry added to PM manuals.');
                                                                                                          