const messages = {
  pt: {
    translations: {
      signup: {
        title: "Registro",
        toasts: {
          success: "¡Usuario creado con éxito! ¡¡¡Acceso!!!.",
          fail: "Error al crear usuario. Verifique los datos ingresados.",
        },
        form: {
          name: "Nombre",
          email: "Email",
          password: "contraceña",
        },
        buttons: {
          submit: "Registrar",
          login: "¿Ya tienes una cuenta? ¡Entre!",
        },
      },
      login: {
        title: "Login",
        form: {
          email: "Email",
          password: "Contraceña",
        },
        buttons: {
          submit: "Entrar",
          register: "¿No tienes una cuenta? ¡Registro!",
        },
      },
      companies: {
        title: "Registrar Empresa",
        form: {
          name: "Nombre de Empresa",
          plan: "Plan",
          token: "Token",
          submit: "Registrar",
          success: "Empresa creada con exito!",
        },
      },
      auth: {
        toasts: {
          success: "Inicio de sesión correcto!",
        },
        token: "Token",
      },
      dashboard: {
        charts: {
          perDay: {
            title: "Atenciones de Hoy: ",
          },
        },
      },
      connections: {
        title: "Conexiones",
        toasts: {
          deleted: "Conexión de WhatsApp eliminada con éxito!",
        },
        confirmationModal: {
          deleteTitle: "Borrar",
          deleteMessage: "¿Estás seguro? Esta acción no se puede revertir..",
          disconnectTitle: "Desconectar",
          disconnectMessage:
            "¿Está seguro? Deberá escanear el código QR nuevamente.",
        },
        buttons: {
          add: "Adicionar WhatsApp",
          disconnect: "desconectar",
          tryAgain: "Intentar nuevamente",
          qrcode: "QR CODE",
          newQr: "Nuevo QR CODE",
          connecting: "Conectando",
        },
        toolTips: {
          disconnected: {
            title: "Error al iniciar sesión en WhatsApp",
            content:
              "Asegúrese de que su teléfono esté conectado a Internet y vuelva a intentarlo, o solicite un nuevo código QR",
          },
          qrcode: {
            title: "Esperando lectura de codigo   QR",
            content:
              "Haga clic en el botón 'CÓDIGO QR' y escanee el Código QR con su teléfono celular para iniciar la sesión",
          },
          connected: {
            title: "Conexión establecida!",
          },
          timeout: {
            title: "Se ha perdido la conexión con el teléfono móvil.",
            content:
              "Asegúrese de que su teléfono esté conectado a Internet y WhatsApp esté abierto, o haga clic en el botón 'Desconectar' para obtener un nuevo código QR",
          },
        },
        table: {
          name: "Nombre",
          status: "Status",
          lastUpdate: "Última actualización",
          default: "Estándar",
          actions: "Accion",
          session: "Sesión",
        },
      },
      whatsappModal: {
        title: {
          add: "Adicionar WhatsApp",
          edit: "Editar WhatsApp",
        },
        form: {
          name: "Nombre",
          default: "Estándar",
        },
        buttons: {
          okAdd: "Adicionar",
          okEdit: "Salvar",
          cancel: "Cancelar",
        },
        success: "WhatsApp guardado con éxito.",
      },
      qrCode: {
        message: "Escanea el QrCode para iniciar la sesión",
      },
      contacts: {
        title: "Contatos",
        toasts: {
          deleted: "Contacto eliminado con éxito!",
        },
        searchPlaceholder: "Buscar...",
        confirmationModal: {
          deleteTitle: "Borrar ",
          importTitlte: "importar contactos",
          deleteMessage:
            "¿Está seguro de que desea eliminar este contacto? Todas las citas relacionadas se perderán.",
          importMessage: "¿Quieres importar todos los contactos del teléfono?",
        },
        buttons: {
          import: "importar contactos",
          add: "Agregar contacto",
        },
        table: {
          name: "Nombre",
          whatsapp: "WhatsApp",
          email: "Email",
          actions: "Accion",
        },
      },
      contactModal: {
        title: {
          add: "Adicionar contato",
          edit: "Editar contato",
        },
        form: {
          mainInfo: "Detalles de contacto",
          extraInfo: "Informaciones adicionales",
          name: "Nombre",
          number: "Número de Whatsapp",
          email: "Email",
          extraName: "Nombre de campo",
          extraValue: "Valor",
        },
        buttons: {
          addExtraInfo: "añadir información",
          okAdd: "Adicionar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "Contacto guardado correctamente.",
      },
      queueModal: {
        title: {
          add: "añadir Areas & Sectores",
          edit: "Editar Areas & Sectores",
        },
        form: {
          name: "Nombre",
          color: "Color",
          greetingMessage: "mensaje de saludo",
          complationMessage: "mensaje de finalización",
          outOfHoursMessage: "Mensaje fuera de horario",
          ratingMessage: "mensaje de evaluación",
          token: "Token",
        },
        buttons: {
          okAdd: "Adicionar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
      },
      userModal: {
        title: {
          add: "Adicionar usuário",
          edit: "Editar usuário",
        },
        form: {
          name: "Nombre",
          email: "Email",
          password: "Contraceña",
          profile: "Perfil",
        },
        buttons: {
          okAdd: "Adicionar",
          okEdit: "Salvar",
          cancel: "Cancelar",
        },
        success: "Usuario guardado con éxito.",
      },
      scheduleModal: {
        title: {
          add: "Nueva programación",
          edit: "Editar horario",
        },
        form: {
          body: "Mensaje",
          contact: "Contato",
          sendAt: "Fecha de Agendamiento",
          sentAt: "Fecha de Envio",
        },
        buttons: {
          okAdd: "Adicionar",
          okEdit: "Guardar",
          cancel: "Cancelar",
        },
        success: "Programación guardada con éxito.",
      },
      tagModal: {
        title: {
          add: "Nueva Tag & Etiqueta",
          edit: "Editar Tag Etiqueta",
        },
        form: {
          name: "Nombre",
          color: "Color",
        },
        buttons: {
          okAdd: "Adicionar",
          okEdit: "Salvar",
          cancel: "Cancelar",
        },
        success: "etiqueta guardada con éxito.",
      },
      chat: {
        noTicketMessage: "Seleccione un ticket para comenzar a chatear.",
      },
      uploads: {
        titles: {
          titleUploadMsgDragDrop: "ARRASTRAR Y SOLTAR ARCHIVOS EN EL CAMPO DE ABAJO",
          titleFileList: "Lista de archivos(s)"
        },
      },      
      ticketsManager: {
        buttons: {
          newTicket: "Nuevo",
        },
      },
      ticketsQueueSelect: {
        placeholder: "Areas & sectores",
      },
      tickets: {
        toasts: {
          deleted: "La cita en la que estabas ha sido eliminada.",
        },
        notification: {
          message: "Mensaje de",
        },
        tabs: {
          open: { title: "Abiertos" },
          closed: { title: "Resueltos" },
          search: { title: "Buscar" },
        },
        search: {
          placeholder: "Servicio de búsqueda y mensajes",
        },
        buttons: {
          showAll: "Todos",
        },
      },
      transferTicketModal: {
        title: "Transferir cliente",
        fieldLabel: "Digite para buscar usuários",
        fieldQueueLabel: "Transferir para Area & Sector",
        fieldQueuePlaceholder: "Selecione na Area",
        noOptions: "No se encontró ningún usuario con ese nombre",
        buttons: {
          ok: "Transferir",
          cancel: "Cancelar",
        },
      },
      ticketsList: {
        pendingHeader: "Esperando",
        assignedHeader: "Atendiendo",
        noTicketsTitle: "Nada por aqui!",
        noTicketsMessage:
          "No se encontró ningún servicio con este estado o término de búsqueda",
        buttons: {
          accept: "Aceptar",
        },
      },
      newTicketModal: {
        title: "Crear Ticket",
        fieldLabel: "Digite para buscar contato",
        add: "Adicionar",
        buttons: {
          ok: "Guardar",
          cancel: "Cancelar",
        },
      },
      mainDrawer: {
        listItems: {
          dashboard: "Dashboard",
          connections: "Conexiones",
          tickets: "Atendimientos",
          quickMessages: "Respuestas Rápidas",
          contacts: "Contatos",
          queues: "Filas & Chatbot",
          tags: "Tags & Etiquetas",
          administration: "Administracion",
          users: "Usuários",
          settings: "Configuracion",
          helps: "Ayuda",
          messagesAPI: "API",
          schedules: "Agendamientos",
          campaigns: "Campañas",
          annoucements: "IBoletin Informativo",
          chats: "Chat Interno",
          financeiro: "Facturacion",
        },
        appBar: {
          user: {
            profile: "Perfil",
            logout: "Sair",
          },
        },
      },
      messagesAPI: {
        title: "API",
        textMessage: {
          number: "Número",
          body: "Mensaje",
          token: "token registrado",
        },
        mediaMessage: {
          number: "Número",
          body: "Nombre del archivo",
          media: "Archivo",
          token: "token registrado",
        },
      },
      notifications: {
        noTickets: "sin notificación.",
      },
      quickMessages: {
        title: "Respuestas Rápidas",
        buttons: {
          add: "Nueva respuesta",
        },
        dialog: {
          shortcode: "Atajo",
          message: "Respuesta",
        },
      },
      contactLists: {
        title: "Listas de Contatos",
        table: {
          name: "Nombre",
          contacts: "Contatos",
          actions: "Aciones",
        },
        buttons: {
          add: "Nueva Lista",
        },
        dialog: {
          name: "Nombre",
          company: "Empresa",
          okEdit: "Editar",
          okAdd: "Adicionar",
          add: "Adicionar",
          edit: "Editar",
          cancel: "Cancelar",
        },
        confirmationModal: {
          deleteTitle: "Eliminar",
          deleteMessage: "Esta acción no se puede revertir..",
        },
        toasts: {
          deleted: "Registro Borrado",
        },
      },
      contactListItems: {
        title: "Contatos",
        searchPlaceholder: "Buscar",
        buttons: {
          add: "Nuevo",
          lists: "Listas",
          import: "Importar",
        },
        dialog: {
          name: "Nombre",
          number: "Número",
          whatsapp: "Whatsapp",
          email: "E-mail",
          okEdit: "Editar",
          okAdd: "Adicionar",
          add: "Adicionar",
          edit: "Editar",
          cancel: "Cancelar",
        },
        table: {
          name: "Nombre",
          number: "Número",
          whatsapp: "Whatsapp",
          email: "E-mail",
          actions: "Acciones",
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage: "Esta acción no se puede revertir..",
          importMessage: "¿Desea importar contactos de esta hoja de trabajo? ",
          importTitlte: "Importar",
        },
        toasts: {
          deleted: "registro eliminado",
        },
      },
      campaigns: {
        title: "Campañas",
        searchPlaceholder: "buscar",
        buttons: {
          add: "Nueva Campaña",
          contactLists: "Listas de Contatos",
        },
        table: {
          name: "Nombre",
          whatsapp: "Conexion",
          contactList: "Lista de Contatos",
          status: "Status",
          scheduledAt: "Agendamento",
          completedAt: "Concluída",
          confirmation: "Confirmsda",
          actions: "Accion",
        },
        dialog: {
          new: "Nueva Campaña",
          update: "Editar Campaña",
          readonly: "solo visualisacion",
          form: {
            name: "Nombre",
            message1: "Mensaje 1",
            message2: "Mensaje 2",
            message3: "Mensaje 3",
            message4: "Mensaje 4",
            message5: "Mensaje 5",
            confirmationMessage1: "Mensaje de confirmacion 1",
            confirmationMessage2: "Mensaje de confirmacion 2",
            confirmationMessage3: "Mensaje de confirmacion 3",
            confirmationMessage4: "Mensaje de confirmacion 4",
            confirmationMessage5: "Mensaje de confirmacion 5",
            messagePlaceholder: "contenido del mensaje",
            whatsapp: "Conexión",
            status: "Status",
            scheduledAt: "Planificación",
            confirmation: "Confirmacion",
            contactList: "Lista de Contatos",
          },
          buttons: {
            add: "Adicionar",
            edit: "Atualizar",
            okadd: "Ok",
            cancel: "Cancelar Disparos",
            restart: "Reiniciar Disparos",
            close: "Cerrar",
            attach: "Adjuntar archivo",
          },
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage: "Esta acción no se puede revertir..",
        },
        toasts: {
          success: "Operación realizada con éxito",
          cancel: "Campaña cancelada",
          restart: "Campaña reiniciada",
          deleted: "registro eliminado",
        },
      },
      announcements: {
        title: "Boletin Informativo",
        searchPlaceholder: "Buscar",
        buttons: {
          add: "Nuevo boletin",
          contactLists: "Lista de boletin informativo",
        },
        table: {
          priority: "Prioridad",
          title: "Titulo",
          text: "Texto",
          mediaName: "Archivo",
          status: "Status",
          actions: "Acciones",
        },
        dialog: {
          edit: "Edición de boletín",
          add: "Nuevo boletín",
          update: "Editar boletín",
          readonly: "Sólo vista",
          form: {
            priority: "Prioridad",
            title: "Titulo",
            text: "Texto",
            mediaPath: "Archivo",
            status: "Status",
          },
          buttons: {
            add: "Adicionar",
            edit: "Atualizar",
            okadd: "Ok",
            cancel: "Cancelar",
            close: "Carrar",
            attach: "Ajuntar Archivo",
          },
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage: "Esta acción no se puede revertir..",
        },
        toasts: {
          success: "Operación realizada con éxito",
          deleted: "Registro excluído",
        },
      },
      campaignsConfig: {
        title: "Configuración de la campaña",
      },
      queues: {
        title: "Filas & Chatbot",
        table: {
          name: "Nombre",
          color: "Color",
          greeting: "mensaje de saludo",
          actions: "Accion",
        },
        buttons: {
          add: "Adicionar fila",
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage:
            "¿Estás seguro? ¡Esta acción no se puede revertir! Las llamadas en esta cola seguirán existiendo, pero ya no tendrán ninguna cola asignada.",
        },
      },
      queueSelect: {
        inputLabel: "Areas & Sectores",
      },
      users: {
        title: "Usuários",
        table: {
          name: "Nombre",
          email: "Email",
          profile: "Perfil",
          actions: "Accion",
        },
        buttons: {
          add: "Adicionar usuário",
        },
        toasts: {
          deleted: "Usuario eliminado con éxito.",
        },
        confirmationModal: {
          deleteTitle: "Excluir",
          deleteMessage:
            "Todos los datos del usuario se perderán. Las llamadas abiertas de este usuario se moverán a la cola.",
        },
      },
      helps: {
        title: "Central de Ayuda",
      },
      schedules: {
        title: "Agendamientos",
        confirmationModal: {
          deleteTitle: "¿Está seguro de que desea eliminar este programa??",
          deleteMessage: "Esta acción no se puede revertir..",
        },
        table: {
          contact: "Contatos",
          body: "Mensaje",
          sendAt: "Fecha de Agendamiento",
          sentAt: "Fecha de Envio",
          status: "Status",
          actions: "Accion",
        },
        buttons: {
          add: "Nuevo Agendamiento",
        },
        toasts: {
          deleted: "Cita eliminada con éxito.",
        },
      },
      tags: {
        title: "Tags & Etiquetas",
        confirmationModal: {
          deleteTitle: "¿Está seguro de que desea eliminar esta etiqueta??",
          deleteMessage: "Esta acción no se puede revertir..",
        },
        table: {
          name: "Nombre",
          color: "Color",
          tickets: "Registros etiquetados",
          actions: "Accion",
        },
        buttons: {
          add: "Nueva Tag Etiqueta",
        },
        toasts: {
          deleted: "Etiqueta eliminada con éxito.",
        },
      },
      settings: {
        success: "Configuración guardada con éxito.",
        title: "Configuraciones",
        settings: {
          userCreation: {
            name: "Crear Usuario usuário",
            options: {
              enabled: "Ativado",
              disabled: "Desativado",
            },
          },
        },
      },
      messagesList: {
        header: {
          assignedTo: "Atribuído à:",
          buttons: {
            return: "Retornar",
            resolve: "Resolver",
            reopen: "Reabrir",
            accept: "Aceptar",
          },
        },
      },
      messagesInput: {
        placeholderOpen: "Escriba un mensaje",
        placeholderClosed:
          "Reabrir o aceptar este ticket para enviar un mensaje.",
        signMessage: "firma",
      },
      contactDrawer: {
        header: "Detalles de contacto",
        buttons: {
          edit: "Editar contacto",
        },
        extraInfo: "Otras informaciones",
      },
      ticketOptionsMenu: {
        schedule: "Agendamiento",
        delete: "Borrar",
        transfer: "Transferir",
        registerAppointment: "Notas de contacto",
        appointmentsModal: {
          title: "Notas de contacto",
          textarea: "Notas",
          placeholder: "Ingresa los datos que deseas registrar aquí",
        },
        confirmationModal: {
          title: "Eliminar ticket de contacto",
          message:
            "¡Atención! Todos los mensajes relacionados con el ticket se perderán.",
        },
        buttons: {
          delete: "Borrar",
          cancel: "Cancelar",
        },
      },
      confirmationModal: {
        buttons: {
          confirm: "Ok",
          cancel: "Cancelar",
        },
      },
      messageOptionsMenu: {
        delete: "Iliminar",
        reply: "Responder",
        confirmationModal: {
          title: "Borrar Mensaje?",
          message: "Esta acción no se puede revertir..",
        },
      },
      backendErrors: {
        ERR_NO_OTHER_WHATSAPP: "Debe haber al menos un WhatsApp predeterminado.",
        ERR_NO_DEF_WAPP_FOUND:
          "No se encontró WhatsApp predeterminado. Revisa la página de conexiones.",
        ERR_WAPP_NOT_INITIALIZED:
          "Esta sesión de WhatsApp no ​​se ha inicializado. Revisa la página de conexiones.",
        ERR_WAPP_CHECK_CONTACT:
          "No se puede verificar el contacto de WhatsApp. Revisa la página de conexiones",
        ERR_WAPP_INVALID_CONTACT: "Este no es un número de whatsapp válido.",
        ERR_WAPP_DOWNLOAD_MEDIA:
          "No se pueden descargar medios de WhatsApp. Revisa la página de conexiones.",
        ERR_INVALID_CREDENTIALS:
          "Error de autenticación. Inténtalo de nuevo.",
        ERR_SENDING_WAPP_MSG:
          "Error al enviar mensaje de WhatsApp. Revisa la página de conexiones.",
        ERR_DELETE_WAPP_MSG: "No se puede eliminar el mensaje de WhatsApp.",
        ERR_OTHER_OPEN_TICKET: "Ya hay un ticket abierto para este contacto.",
        ERR_SESSION_EXPIRED: "Sesión expirada. Por favor entre.",
        ERR_USER_CREATION_DISABLED:
          "El administrador ha inhabilitado la creación de usuarios.",
        ERR_NO_PERMISSION: "No tienes permiso para acceder a este recurso..",
        ERR_DUPLICATED_CONTACT: "Ya existe un contacto con este número.",
        ERR_NO_SETTING_FOUND: "No se encontró ninguna configuración con este ID.",
        ERR_NO_CONTACT_FOUND: "No se encontró ningún contacto con este ID.",
        ERR_NO_TICKET_FOUND: "No se encontraron boletos con esta ID.",
        ERR_NO_USER_FOUND: "No se encontró ningún usuario con este ID.",
        ERR_NO_WAPP_FOUND: "No se encontró WhatsApp con este ID.",
        ERR_CREATING_MESSAGE: "Error al crear el mensaje en la base de datos.",
        ERR_CREATING_TICKET: "Error al crear ticket en la base de datos.",
        ERR_FETCH_WAPP_MSG:
          "Error al obtener el mensaje en WhatsApp, tal vez sea demasiado antiguo.",
        ERR_QUEUE_COLOR_ALREADY_EXISTS:
          "Este color ya está en uso, elija otro.",
        ERR_WAPP_GREETING_REQUIRED:
          "El mensaje de saludo es obligatorio cuando hay más de una cola.",
      },
    },
  },
};

export { messages };
