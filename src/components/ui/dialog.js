
// Simplified Dialog components for direct use in the browser
const Dialog = ({ children }) => {
  const [open, setOpen] = React.useState(false);
  return React.createElement(
    React.Fragment,
    null,
    React.cloneElement(children[0], { onClick: () => setOpen(true) }),
    open && React.cloneElement(children[1], { onClose: () => setOpen(false) })
  );
};

const DialogTrigger = ({ asChild, children }) => {
  return children;
};

const DialogContent = ({ className, children, onClose }) => {
  return React.createElement(
    "div",
    { 
      className: "fixed inset-0 flex items-center justify-center z-50 bg-black/50",
      onClick: (e) => {
        if (e.target === e.currentTarget) onClose();
      }
    },
    React.createElement(
      "div",
      { 
        className: `bg-white rounded-lg p-6 max-w-md mx-auto relative ${className || ''}`,
        onClick: (e) => e.stopPropagation()
      },
      React.createElement(
        "button",
        {
          className: "absolute top-4 right-4 text-gray-500 hover:text-gray-700",
          onClick: onClose
        },
        "×"
      ),
      children
    )
  );
};

const DialogHeader = ({ className, children }) => {
  return React.createElement("div", { className: `mb-4 ${className || ''}` }, children);
};

const DialogTitle = ({ className, children }) => {
  return React.createElement("h2", { className: `text-xl font-bold ${className || ''}` }, children);
};

export { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle };
