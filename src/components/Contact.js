const Contact = () => {
    return (
        <div>
            <h1 className="text-3xl p-3 m-3">Contact Us</h1>
            <form>
                <input className="border border-black p-3 m-2 " type="text" placeholder="name"/>
                <input className="border border-black p-3 m-2" type="text" placeholder="message"/>
                <button className="bg-slate-300 p-3 m-2 rounded-lg hover:bg-slate-500">Submit</button>
            </form>
        </div>
    );
};

export default Contact;